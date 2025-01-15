import { useEffect, useRef, useState } from "react"
import { ChatContainer, ChatItem, WelcomeBoxChat } from "./style"
import Form from "../form"
import { Message } from "../../../models/chat"
import { isMessageBot } from "../../../logic/chat"
import { getAccessToken, getMessages } from "../../../controller/http_client"
import { useCookies } from "react-cookie"

export default function Chat(){
    const [chatLog, setChatLog] = useState<Message[]>([])
    const [cookies, setCookie, _removeCookie] = useCookies(['user-id', 'access'])

    const messagesEndRef = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }, [chatLog]);

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
            <h1>
                Teste Chat
            </h1>
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
                    Boas vindas ao Chatbot do Smartest!!
                </WelcomeBoxChat>
            )}
            <Form setChatLog={setChatLog} currentLog={chatLog}/>
            <div ref={messagesEndRef} />
        </ChatContainer>
    )
}