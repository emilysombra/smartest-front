import Showdown from "showdown"
import DOMPurify from "dompurify"
import { Message } from "../models/chat"

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
})

export const isMessageBot = (msg: Message): boolean => msg.sender === import.meta.env.VITE_API_BOT_UUID

export const setHTML = (msg: Message) => isMessageBot(msg) ?
                                            converter.makeHtml(DOMPurify.sanitize(msg.content!)) :
                                            msg.content!.concat("<br>")