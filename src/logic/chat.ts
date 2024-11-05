import { Message } from "../models/chat";

export const isMessageBot = (msg: Message): boolean => msg.sender === import.meta.env.VITE_API_BOT_UUID