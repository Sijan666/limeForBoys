import Locations from "../layouts/Locations"
import NewsBlog from "../layouts/NewsBlog"
import Whylime from "../layouts/Whylime"
import Map from "../layouts/Map"
import TheApp from "../layouts/TheApp"
import Banner from "../layouts/Banner"
import Vehicles from "../layouts/Vehicles"


const Home = () => {
    return (
        <>
        <Banner/>
        <Vehicles/>
        <TheApp/>
        <Locations/>
        <Whylime/>
        <NewsBlog/>
        <Map/>
        </>
    )
}

export default Home;
