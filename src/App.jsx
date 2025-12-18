import './App.css'
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
// import AboutUs from './components/pages/AboutUs'
// import WhyLime from './components/pages/WhyLime'
// import Vehicles from './components/pages/Vehicles'
// import Locations from './components/pages/Locations'
// import Advertise from './components/pages/Advertise'
// import Blog from './components/pages/Blog'
// import Help from './components/pages/Help'



function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          {/* <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/vehicles" element={<Vehicles/>} />
          <Route path="/locations" element={<Locations/>} />
          <Route path="/advertise" element={<Advertise/>} />
          <Route path="/whylime" element={<WhyLime/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/help" element={<Help/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App


