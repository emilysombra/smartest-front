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
    var message = {}
    var body = {
        content: input,
        sender: "3352f124-ea31-4c99-b9d1-111d97e4d892",
        receiver: "e7d81ea5-d89c-40b3-9cd3-3ed8fb6c53d5"
    }
    var options = {headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNzEzMDQ4LCJpYXQiOjE3MzA2OTE0NDgsImp0aSI6IjUyOTk3YmNjYTdmZDQyYjU5ODIwNmRjYmQ2NmYxMDNhIiwidXNlcl9pZCI6MX0.reAj58lWIyuCvsYq1sXgwoKTcc-3G7A4BF1u37HL3kY"
    }}
    await API.post("/messages/", body, options)
        .then((response) => {
            message = response.data;
          })
        .catch((err) => {
            console.log(err)
        })

    return message
}