import { useState } from "react"
import { InputDiv, InputText } from "./style"

export default function Form(){
    const [inputPrompt, setInputPrompt] = useState("")

    const onClickSubmit = async () => {
        alert(inputPrompt)
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