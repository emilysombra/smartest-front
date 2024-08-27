import axios from "axios";
// models
import { Item } from "../models/grid";

export const getList = async (url: string): Promise<Item[]> => {
    var finalResponse: Item[] = [];

    await axios.get(url)
        .then((response) => {
            if (Array.isArray(response.data))
                finalResponse = response.data;
          })
        .catch((err) => {
            console.log(err);
        });
    return finalResponse;
};