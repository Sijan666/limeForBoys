import Header from "../layouts/Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const RootLayouts = () => {
        return (
                <>
                <Header/>
                <Outlet/>
                <Footer/>
                </>
        )
}

export default RootLayouts