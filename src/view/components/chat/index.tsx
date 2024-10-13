import { useState } from "react";
import { ChatContainer, ChatItem, WelcomeBoxChat } from "./style";
import Form from "../form";

export default function Chat(){
    const [chatLog, setChatLog] = useState(["teste1", "teste2"])

    return (
        <ChatContainer>
            <h1>
                Teste Chat
            </h1>
            {chatLog.length > 0 ? (
                chatLog.map((item) => (
                    <ChatItem>
                        {item}
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