import axios from "axios"
// models
import { Item } from "../models/grid"
import { Message } from "../models/chat"

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export const getList = async (url: string): Promise<Item[]> => {
    var finalResponse: Item[] = []

    await API.get(url)
        .then((response) => {
            if (Array.isArray(response.data))
                finalResponse = response.data
          })
        .catch((err) => {
            console.log(err)
        })
    return finalResponse
}

export const getItem = async (url: string): Promise<Item> => {
    var finalResponse: Item = {}

    await API.get(url)
        .then((response) => {
            finalResponse = response.data
          })
        .catch((err) => {
            console.log(err)
        })
    return finalResponse
}

export const getMessageList = async (url: string): Promise<Message[]> => {
    var finalResponse: Message[] = []
    
    await API.get(url)
        .then((response) => {
            if (Array.isArray(response.data))
                finalResponse = response.data
          })
        .catch((err) => {
            console.log(err)
        })
    return finalResponse
}

export const loginUser = async (user: string):Promise<string> => {
    var token = ''
    var body = {
        username: user,
        password: import.meta.env.VITE_API_ACCESS
    }

    await API.post("/auth/login/", body)
        .then((response) => {
            if(response.hasOwnProperty('access'))
                token = response.data.access
          })
        .catch((err) => {
            console.log(err)
        })

    return token
}

export const getMessageResponse = async (input: string, sender: string) => {
    var message = {}
    var body = {
        content: input,
        sender: sender,
        receiver: "e7d81ea5-d89c-40b3-9cd3-3ed8fb6c53d5"
    }
    var options = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN_ACCESS}`
        }
    }
    await API.post("/messages/", body, options)
        .then((response) => {
            message = response.data
          })
        .catch((err) => {
            console.log(err)
        })

    return message
}
