import { Message } from "../models/chat"
import { Item } from "../models/grid"
import { getItem, getList, getMessageList, getMessageResponse, loginUser } from "./request"

export const getCoursesList = async (setCourses: (arg0: Item[]) => void) => setCourses(await getList("/courses/"))

export const getCareersList = async (setCourses: (arg0: Item[]) => void) => setCourses(await getList("/careers/"))

export const getCourseItem = async (setCourse: (arg0: Item) => void, id: string) => setCourse(await getItem(`/courses/${id}`))

export const getCareerItem = async (setCareer: (arg0: Item) => void, id: string) => setCareer(await getItem(`/careers/${id}`))

export const getChatBotResponse = async (input: string, sender: string): Promise<Message> => getMessageResponse(input, sender)

export const getMessages = async (setChatLog: (arg0: Message[]) => void, user: string) => setChatLog(await getMessageList(`/messages/?user=${user}`))

export const getAccessToken = async (user: string, setCookie: Function) => setCookie('access', await loginUser(user))
