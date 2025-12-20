import Locations from "../layouts/Locations"
import NewsBlog from "../layouts/NewsBlog"
import Whylime from "../layouts/Whylime"
import Map from "../layouts/Map"
import TheApp from "../layouts/TheApp"


const Home = () => {
    return (
        <>
        <TheApp/>
        <Locations/>
        <NewsBlog/>
        <Whylime/>
        <Map/>
        </>
    )
}

export default Home