import Banner from "../layouts/Banner";
import Locations from "../layouts/Locations"
import NewsBlog from "../layouts/NewsBlog"
import TheApp from "../layouts/TheApp";
import Whylime from "../layouts/Whylime";


const Home = () => {
    return (
        <>
        <Banner/>
        <TheApp/>
        <Locations/>
        <Whylime/>
        <NewsBlog/>
        </>
    )
}

export default Home;
