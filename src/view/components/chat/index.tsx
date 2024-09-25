import { useState } from "react";
import { ChatContainer } from "./style";

export default function Chat(){
    const [inputPrompt, setInputPrompt] = useState("")
    const [chatLog, setChatLog] = useState([])

    return (
        <ChatContainer>
            <h1>
                Teste Chat
            </h1>
        </ChatContainer>
    )
}