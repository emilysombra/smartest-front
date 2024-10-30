import { Message } from "../models/chat";

export const isMessageBot = (msg: Message): boolean => msg.sender === "e7d81ea5-d89c-40b3-9cd3-3ed8fb6c53d5"