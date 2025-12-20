import Locations from "../layouts/Locations"
import NewsBlog from "../layouts/NewsBlog"
import Whylime from "../layouts/Whylime"
import Map from "../layouts/Map"
import TheApp from "../layouts/TheApp"
import Banner from "../layouts/Banner"


const Home = () => {
    return (
        <>
        <Banner/>
        <TheApp/>
        <Locations/>
        <Whylime/>
        <NewsBlog/>
        <Map/>
        </>
    )
}

export default Home;
