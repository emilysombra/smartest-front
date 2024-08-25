import { Item } from "../models/grid";
import { getList } from "./request";

export const getCoursesList = async (setCourses: (arg0: Item[]) => void) => setCourses(await getList("localhost"));

export const getCareersList = async (setCourses: (arg0: Item[]) => void) => setCourses(await getList("localhost"));