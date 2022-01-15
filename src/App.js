
import './App.css';
import Header from './components/Header';
import Feature from './components/Features';
import Footer from './components/Footer';
import Activities from './components/Activities';
import Admission from './components/admission';
import Blur from './components/blur'
import { Products } from './components/products';
import { SpecificProduct } from './components/specificProduct';
import Courses  from './components/courses'
import SpecificCourse from './components/specificCourse';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

// import image from "../src/images/"

function App() {
  return (
    <div>
      {/* <Header></Header> */}

      {/* <Activities></Activities> */}

      {/* <Feature></Feature> */}


      {/* <Admission></Admission> */}

      {/* <Blur></Blur> */}
      {/* <Products></Products> */}
      {/* <Footer></Footer> */}

      <Routes>

        {/* <Switch> */}
          {/* <Route exact path="/" component={Home}></Route> */}
          <Route exact path="/products/:id" element={<SpecificProduct/>}></Route>
          <Route exact path="/products" element={<Products/>}></Route>

          <Route exact path="/courses" element={<Courses/>}></Route>
          <Route exact path="/courses/:id" element={<SpecificCourse/>}></Route>

        {/* </Switch> */}
      </Routes>


    </div>
  );
}

export default App;
