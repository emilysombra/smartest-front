import { useState } from "react";
import { ChatContainer, ChatItem, WelcomeBoxChat } from "./style";

export default function Chat(){
    const [inputPrompt, setInputPrompt] = useState("")
    const [chatLog, setChatLog] = useState(["", ""])

    const onClickSubmit = async () => {
        alert("deu certo")
    }

    return (
        <ChatContainer>
            <h1>
                Teste Chat
            </h1>
            {chatLog.length > 0 ? (
                <ChatItem>
                    teste
                </ChatItem>
            ) : (
                <WelcomeBoxChat>
                    Boas vindas ao Chatbot do Smartest!!
                </WelcomeBoxChat>
            )}
        </ChatContainer>
    )
}