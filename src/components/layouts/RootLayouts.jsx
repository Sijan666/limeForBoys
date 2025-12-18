
import { Outlet } from "react-router-dom"
import Header from "../layouts/Header"

const RootLayouts = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default RootLayouts