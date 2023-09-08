import "./Proyectos.css"
import Proyecto from "./Proyecto";
import Apeperia from "../../imagenes/Apeperia.png";
import Encriptador from "../../imagenes/Encriptador.png"
import Portafolio from "../../imagenes/Portafolio.png";
import QuienesSomos from "../../imagenes/QuienesSomos.png";
import Planes from "../../imagenes/Planes.png";
import Metas from "../../imagenes/metasapp.png"
import { motion } from 'framer-motion';
import html from "../../imagenes/html.jfif";
import css from '../../imagenes/css.png';
import js from "../../imagenes/js.png";
import react from "../../imagenes/React.png";
import node from "../../imagenes/node.webp";
import postgresql from "../../imagenes/Postgresql.png";


const Proyectos = ()=>{

    const proyecto1 = [html,css, js, react, node, postgresql];
    const proyecto2 = [html,css, js, react];
    const proyecto3 = [html,css, js];
    const proyecto4 = [html,css];
    const proyecto5 = [html,css];
    const proyecto6 = [html,css];

    return(
        <motion.main className="Proyectos-container" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
            <div className="titulo-proyectos">
                <h1 className="intro-proyectos"><span className="blue">M</span>is <span className="orange">p</span>royectos</h1>
            </div>
            <Proyecto imagen={Metas} titulo="Aplicacion de metas" descripcion="Aplicación de metas FullStack desarrollada con Nodejs, Reactjs y SQL" link="https://hugoadrianmejiasoteno.github.io/metasapp/" repositorio="https://github.com/HugoAdrianMejiaSoteno/metasapp" imagenes={proyecto1}/>
            <Proyecto imagen={Portafolio} titulo="Portafolio personal" descripcion="Portafolio personal desarrollado con Reactjs" link="https://hugoadrianmejiasoteno.github.io/portafolioHugoMejia/" repositorio="https://github.com/HugoAdrianMejiaSoteno/portafolioHugoMejia" imagenes={proyecto2}/>
            <Proyecto imagen={Encriptador} titulo="Encriptador de texto" descripcion="Encriptador y desencriptador de textos desarrollado con JavaScript Vanilla" link="https://hugoadrianmejiasoteno.github.io/Encriptador-ONE/" repositorio="https://github.com/HugoAdrianMejiaSoteno/Encriptador-ONE" imagenes={proyecto3}/>
            <Proyecto imagen={QuienesSomos} titulo="Quienes somos" descripcion="Landing page sobre informacion de una empresa desarrollada con HTML y CSS" link="https://hugoadrianmejiasoteno.github.io/ApeperiaAlura/" imagenes={proyecto4}/>
            <Proyecto imagen={Apeperia} titulo="Tienda de papeleria" descripcion="Landing page de papeleria Apeperia desarrollada con HTML y CSS" link="https://hugoadrianmejiasoteno.github.io/ApeperiaAlura/" imagenes={proyecto5}/>
            <Proyecto imagen={Planes} titulo="Planes de costos" descripcion="Planes de costos sobre un servicio desarrollada con HTML y CSS" link="https://hugoadrianmejiasoteno.github.io/ApeperiaAlura/" imagenes={proyecto6}/>
        </motion.main>
    )
}

export default Proyectos;