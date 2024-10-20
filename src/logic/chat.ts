import { Message } from "../models/chat";

export const isMessageBot = (msg: Message): boolean => msg.sender === "bot"