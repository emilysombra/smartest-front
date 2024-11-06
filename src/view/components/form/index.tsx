import { useState } from "react"
import { InputDiv, InputText } from "./style"
import { getChatBotResponse } from "../../../controller/http_client"
import { FormChatProps } from "../../../models/chat"

export default function Form({setChatLog, currentLog}: FormChatProps){
    const [inputPrompt, setInputPrompt] = useState("")

    const onClickSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if(inputPrompt.trim() !== ""){
            var newMessage = {
                content: inputPrompt,
                sender: "",
                created_at: Date.now().toString()
            }
            var newList = [...currentLog, newMessage]
            setInputPrompt("")
            setChatLog(newList)
            setChatLog([
                ...newList,
                await getChatBotResponse(inputPrompt)
            ])           
        }
    }

    return (
        <form onSubmit={onClickSubmit}>
            <InputDiv>
                <InputText
                    type="text"
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    placeholder="Digite sua mensagem"
                    autoFocus/>
            </InputDiv>
        </form>
    )
}