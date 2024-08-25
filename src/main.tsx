import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// views
import Header from './components/header/index.tsx'
import Home from './view/Home.tsx'
// styles
import { GlobalStyle } from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
