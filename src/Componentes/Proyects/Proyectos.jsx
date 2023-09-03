import "./Proyectos.css"
import Proyecto from "./Proyecto";
import Apeperia from "../../imagenes/Apeperia.png";
import Encriptador from "../../imagenes/Encriptador.png"
import Portafolio from "../../imagenes/Portafolio.png";
import QuienesSomos from "../../imagenes/QuienesSomos.png";
import Planes from "../../imagenes/Planes.png";
import Metas from "../../imagenes/metasapp.png"
import { motion } from 'framer-motion';
const Proyectos = ()=>{
    return(
        <motion.main className="Proyectos-container" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
            <div>
                <h1 className="intro-proyectos"><span className="blue">M</span>is <span className="orange">p</span>royectos</h1>
            </div>
            <Proyecto imagen={Metas} titulo="Aplicacion de metas" descripcion="Aplicación de metas FullStack desarrollada con Nodejs, Reactjs y SQL" link="https://hugoadrianmejiasoteno.github.io/metasapp/" repositorio="https://github.com/HugoAdrianMejiaSoteno/metasapp"/>
            <Proyecto imagen={Portafolio} titulo="Portafolio personal" descripcion="Portafolio personal desarrollado con Reactjs" link="https://hugoadrianmejiasoteno.github.io/PortafolioReact/" repositorio="https://github.com/HugoAdrianMejiaSoteno/PortafolioReact"/>
            <Proyecto imagen={Encriptador} titulo="Encriptador de texto" descripcion="Encriptador y desencriptador de textos desarrollado con JavaScript Vanilla" link="https://hugoadrianmejiasoteno.github.io/Encriptador-ONE/" repositorio="https://github.com/HugoAdrianMejiaSoteno/Encriptador-ONE"/>
            <Proyecto imagen={QuienesSomos} titulo="Quienes somos" descripcion="Landing page sobre informacion de una empresa desarrollada con HTML y CSS" link="https://hugoadrianmejiasoteno.github.io/ApeperiaAlura/"/>
            <Proyecto imagen={Apeperia} titulo="Tienda de papeleria" descripcion="Landing page de papeleria Apeperia desarrollada con HTML y CSS" link="https://hugoadrianmejiasoteno.github.io/ApeperiaAlura/" />
            <Proyecto imagen={Planes} titulo="Planes de costos" descripcion="Planes de costos sobre un servicio desarrollada con HTML y CSS" link="https://hugoadrianmejiasoteno.github.io/ApeperiaAlura/"/>
        </motion.main>
    )
}

export default Proyectos;