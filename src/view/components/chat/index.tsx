import { useEffect, useState } from "react";
import { ChatContainer, ChatItem, WelcomeBoxChat } from "./style";
import Form from "../form";
import { Message } from "../../../models/chat";
import { isMessageBot } from "../../../logic/chat";
import { getMessages } from "../../../controller/http_client";

export default function Chat(){
    const [chatLog, setChatLog] = useState<Message[]>([])

    useEffect(() => {    
        getMessages(setChatLog, "3352f124-ea31-4c99-b9d1-111d97e4d892")
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
        </ChatContainer>
    )
}