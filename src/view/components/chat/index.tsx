import { useEffect, useState } from "react";
import { ChatContainer, ChatItem, WelcomeBoxChat } from "./style";
import Form from "../form";
import { Message } from "../../../models/chat";
import { isMessageBot } from "../../../logic/chat";

export default function Chat(){
    const [chatLog, setChatLog] = useState<Message[]>([])

    useEffect(() => {
        setChatLog([
            {content: "teste1", sender: "bot"},
            {content: "teste2", sender: "customer"}
        ])
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
            <Form />
        </ChatContainer>
    )
}