import styled from "styled-components";

export const ChatContainer = styled.section`
    flex: 1;
    background-color: #fafafa;
    position: relative;
    line-height: 24px;
    color: #61656b;
    font-size: 16px;
    height: 100vh;
    overflow-y: auto;
    text-align: center;
`

export const WelcomeBoxChat = styled.div`
    text-align: center;
`

export const ChatItem = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 24px;
    display: flex;
    column-gap: 25px;    

    &.bot-message{
        justify-content: left;
        text-align: left;
    }

    &.customer-message{
        justify-content: right;
        text-align: right;
    }
`
