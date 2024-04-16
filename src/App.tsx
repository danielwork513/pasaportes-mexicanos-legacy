import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./pages/Index"
import LegalPage from "./pages/Legal"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/tyc" element={<LegalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
