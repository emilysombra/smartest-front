import styled from "styled-components";

export const InputDiv = styled.section`
  margin-top: 40px;
  left: 50%;
  right: 50%;
  bottom: 0;
  position: relative;
  transform: translate(-50%, -50%);
  width: 80%;
  max-height: 200px;
  height: 55px;
  background-color: #41414e;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  `

export const InputText = styled.input`
  padding: 10px;
  flex: 1;
  resize: none;
  background-color: #41414e;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  overflow-y: hidden;
`