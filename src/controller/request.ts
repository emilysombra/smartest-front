import axios from "axios";
// models
import { Item } from "../models/grid";
import { Message } from "../models/chat";

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export const getList = async (url: string): Promise<Item[]> => {
    var finalResponse: Item[] = [];

    await API.get(url)
        .then((response) => {
            if (Array.isArray(response.data))
                finalResponse = response.data;
          })
        .catch((err) => {
            console.log(err);
        });
    return finalResponse;
};

export const getItem = async (url: string): Promise<Item> => {
    var finalResponse: Item = {};

    await API.get(url)
        .then((response) => {
            finalResponse = response.data;
          })
        .catch((err) => {
            console.log(err);
        });
    return finalResponse;
}

export const getMessageList = async (url: string): Promise<Message[]> => {
    var finalResponse: Message[] = [
        {content: "teste1", sender: "bot"},
        {content: "teste2", sender: "user"}
    ];
    
    await API.get(url)
        .then((response) => {
            if (Array.isArray(response.data))
                finalResponse = response.data;
          })
        .catch((err) => {
            console.log(err);
        });
    return finalResponse;
};

export const getResponse = async () => {
    await API.post("url")
        .then()
        .catch((err) => {
            console.log(err)
        })
}