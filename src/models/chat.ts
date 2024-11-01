export interface Message {
    id?: number
    content?: string
    created_at?: string
    sender?: string
}

export interface FormChatProps {
    setChatLog: (arg0: Message[]) => void
    currentLog: Message[]
}