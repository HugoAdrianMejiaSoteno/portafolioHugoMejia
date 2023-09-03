//Creamos este componente de AnimatedRoutes porque no podiamos usar useLocation en el componente App dentro de Route y este necesita tener la logica de useLocation dentro de Route por lo que para poder meter esa logica creamos este componente y lo vamos a meter dentro de Route en el componente principal

import React from "react";
import Presentation from './Presentation/Presentaton';
import Error from './Error404/Error';
import AboutMe from './AboutMe/AboutMe';
import Training from './Training/Training';
import Skills from './Skills/Skills';
import Proyectos from './Proyects/Proyectos';
import Contacto from './Contacto/Contacto';
import {Routes, Route,useLocation} from 'react-router-dom'; //Lo del useLocation lo estamos usando para poder combinar react router con framer motion

import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = ()=>{
    const location = useLocation(); //Es para que react-router-dom pueda identificar a que componente le va a agregar la transision
    //AnimatePresence debe de engrapar a Routes con las rutas
    return(
        <AnimatePresence> 
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Presentation/>}/>
                <Route path="/Sobre-mi" element={<AboutMe/>}></Route>
                <Route path='/Skills' element={<Skills/>}></Route>
                <Route path='/Proyectos' element={<Proyectos/>}></Route>
                <Route path="/Formacion" element={<Training/>}></Route>
                <Route path='/Contacto' element={<Contacto/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;