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
    var finalResponse: Message[] = [];
    
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

export const getMessageResponse = async (input: string) => {
    return {
        content: "generated message",
        sender: "e7d81ea5-d89c-40b3-9cd3-3ed8fb6c53d5",
        created_at: Date.now().toString()
    }
    await API.post("/messages/")
        .then()
        .catch((err) => {
            console.log(err)
        })
}