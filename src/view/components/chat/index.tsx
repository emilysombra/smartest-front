import { useEffect, useRef, useState } from "react"
import { ChatContainer, ChatItem, WelcomeBoxChat } from "./style"
import Form from "../form"
import { Message } from "../../../models/chat"
import { isMessageBot } from "../../../logic/chat"
import { getAccessToken, getMessages } from "../../../controller/http_client"
import { useCookies } from "react-cookie"
import BackTop from "../BackToTop"

export default function Chat(){
    const [chatLog, setChatLog] = useState<Message[]>([])
    const [cookies, setCookie, _removeCookie] = useCookies(['user-id', 'access'])
    const [scrollPosition, setSrollPosition] = useState(0);
    const [backTopEnabled, setBackTopEnabled] = useState<boolean>(false)

    const titleRef = useRef<null | HTMLDivElement>(null)
    const messagesEndRef = useRef<null | HTMLDivElement>(null)

    const handleScrollPage = () => {
        let position = window.pageYOffset;
        setSrollPosition(position);
        if (scrollPosition > 50)
            setBackTopEnabled(true)
        else if(scrollPosition < 50)
            setBackTopEnabled(false)
    }

    const handleScrollUp = () => {
        titleRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }, [chatLog]);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPage);
    });

    useEffect(() => {
        let user_id = crypto.randomUUID().toString()

        if(!cookies["user-id"])
            setCookie('user-id', user_id)
        else
            user_id = cookies['user-id']

        getMessages(setChatLog, user_id)

        if(!cookies["access"])
            getAccessToken(user_id, setCookie)
    }, [])

    return (
        <ChatContainer>
            <div ref={titleRef}> </div>
            <h1>Smartest Chatbot</h1>
            {chatLog.length > 0 ? (
                chatLog.map((item) => (
                    <ChatItem className={isMessageBot(item) ? "bot-message" : "customer-message"}>
                        <span>
                            <strong>{isMessageBot(item) ? "Smartest:" : "Você:"}</strong> {item.content}
                        </span>
                    </ChatItem>
                ))
            ) : (
                <WelcomeBoxChat>
                    <span>Boas vindas ao Chatbot do Smartest!!</span>
                </WelcomeBoxChat>
            )}
            <Form setChatLog={setChatLog} currentLog={chatLog}/>
            <BackTop enabled={backTopEnabled} action={handleScrollUp}/>
            <div ref={messagesEndRef} />
        </ChatContainer>
    )
}