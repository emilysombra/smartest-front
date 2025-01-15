import axios, { AxiosError } from "axios"
// models
import { Item } from "../models/grid"
import { Message } from "../models/chat"

const API = axios.create({
    baseURL: 'https://smartest.up.railway.app'
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
            if(response.data.hasOwnProperty('access'))
                token = response.data.access
          })
        .catch(async (err: AxiosError) => {
            if(err.response!.status === 401){
                console.log("Unauthorized user, registering...")
                await registerUser(user)
                token = await loginUser(user)
            }else if (err.response!.status === 400){
                console.log("Bad Request (login)")
                console.log('error:', err)
                console.log('body:', body)
            }
            else{
                console.log('Unknown HTTP Error (login)')
                console.log('error:', err)
            }
        }).catch((err) => {
            console.log('Unknown error (login)')
            console.log('error:', err)
        })

    return token
}

export const registerUser = async (user: string) => {
    var body = {
        username: user,
        password: import.meta.env.VITE_API_ACCESS
    }

    await API.post("/auth/register/", body)
        .then((response) => {
            console.log(response)
            console.log('Succesfully registered')
          })
        .catch((err: AxiosError) => {
            console.log('Unknown HTTP Error (register)')
            console.log('error:', err)
        }).catch((err) => {
            console.log('Unknown error (register)')
            console.log('error:', err)
        })
}

export const getMessageResponse = async (input: string, sender: string, access: string) => {
    var message = {}
    var body = {
        content: input,
        sender: sender,
        receiver: "e7d81ea5-d89c-40b3-9cd3-3ed8fb6c53d5"
    }
    var options = {
        headers: {
            Authorization: `Bearer ${access}`
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
