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
        if(!cookies["user-id"])
            setCookie('user-id', crypto.randomUUID().toString())
        getMessages(setChatLog, cookies["user-id"])

        if(!cookies["access"])
            setCookie('access', getAccessToken(cookies["user-id"]))
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