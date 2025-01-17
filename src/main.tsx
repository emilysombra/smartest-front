import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// views
import Header from './view/components/header/index.tsx'
import Home from './view/Home.tsx'
// styles
import { GlobalStyle } from './styles/global.ts'
import BlogItem from './view/components/blog_item/index.tsx'
import Chat from './view/components/chat/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses/:id" element={<BlogItem type='courses'/>} />
        <Route path="careers/:id" element={<BlogItem type='careers'/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/how-it-works" element={<Home/>} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
