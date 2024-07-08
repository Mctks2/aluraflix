import { BasePage } from "./pages/BasePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage/>}/>               
            </Routes>
        </BrowserRouter>
    )
}