import { Item } from "../models/grid";
import { getList } from "./request";

export const getCoursesList = async (setCourses: (arg0: Item[]) => void) => setCourses(await getList("127.0.0.1:8000/courses/"));

export const getCareersList = async (setCourses: (arg0: Item[]) => void) => setCourses(await getList("127.0.0.1:8000/careers/"));