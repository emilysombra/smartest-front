import { useState } from "react"
import { InputDiv, InputText } from "./style"
import { getChatBotResponse } from "../../../controller/http_client"

export default function Form(){
    const [inputPrompt, setInputPrompt] = useState("")

    const onClickSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if(inputPrompt.trim() !== ""){
            setInputPrompt("")
            getChatBotResponse(inputPrompt)
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