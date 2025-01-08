import { useState } from "react"
import { InputDiv, InputText } from "./style"
import { getChatBotResponse } from "../../../controller/http_client"
import { FormChatProps } from "../../../models/chat"
import { useCookies } from "react-cookie"

export default function Form({setChatLog, currentLog}: FormChatProps){
    const [inputPrompt, setInputPrompt] = useState('')
    const [cookies, _setCookie, _removeCookie] = useCookies(['user-id', 'access'])

    const onClickSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if(inputPrompt.trim() !== ''){
            var newMessage = {
                content: inputPrompt,
                sender: cookies['user-id'],
                created_at: Date.now().toString()
            }
            var newList = [...currentLog, newMessage]
            setInputPrompt('')
            setChatLog(newList)
            setChatLog([
                ...newList,
                await getChatBotResponse(inputPrompt, cookies['user-id'], cookies['access'])
            ])           
        }
    }

    return (
        <form onSubmit={onClickSubmit}>
            <InputDiv>
                <InputText
                    type='text'
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    placeholder='Digite sua mensagem'
                    autoFocus/>
            </InputDiv>
        </form>
    )
}