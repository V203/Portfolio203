/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from './pages/Home';
import WhoAmI from './pages/WhoAmI';
import './App.css'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Projects from './pages/Projects';
// import Sparkles from "./components/Sparkles";
import { useState } from 'react'
import ViewModal from "./components/ViewModal";
import { certificationContext } from './context/ContextValues';
import * as React from 'react';
// import { ICertContext } from './interfaces/Interfaces';


// import Sparkles from './components/Sparkles';
const Root = () => {

  const [viewCert, setViewCert] = useState<any>({imgUrl:"",name:""});
  const [viewBool,setViewBool] = useState<React.Dispatch<React.SetStateAction<boolean> | any> | any>(false);

  
  return (
    
    <certificationContext.Provider value={{viewCert, setViewCert,viewBool,setViewBool}}>

      {/* <Sparkles /> */}
      <ViewModal key={viewCert.name} displayBool={viewBool} imgUrl={viewCert.imgUrl} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhoAmI" element={<WhoAmI />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Certifications" element={<Certifications />} />
      </Routes>
    </certificationContext.Provider>
    
  );

};

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function App() {
  return <RouterProvider router={router} />;

}



export default App
