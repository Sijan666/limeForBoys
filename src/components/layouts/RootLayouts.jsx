import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Footer from "./Footer"


const RootLayouts = () => {
    return (
        <>
        <Home/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default RootLayouts