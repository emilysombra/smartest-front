import { Item } from "../models/grid"
import { getItem, getList } from "./request"

export const getCoursesList = async (setCourses: (arg0: Item[]) => void) => setCourses(await getList("/courses/"))

export const getCareersList = async (setCourses: (arg0: Item[]) => void) => setCourses(await getList("/careers/"))

export const getCourseItem = async (setCourse: (arg0: Item) => void, id: string) => setCourse(await getItem(`/courses/${id}`))

export const getCareerItem = async (setCareer: (arg0: Item) => void, id: string) => setCareer(await getItem(`/careers/${id}`))

export const getChatBotResponse = async (input: string) => alert(input)