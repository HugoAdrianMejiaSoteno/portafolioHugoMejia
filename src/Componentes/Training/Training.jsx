import "./Training.css";
import TrainingCard from "./Training-card";
import Unitec from "../../imagenes/UnitecLogo.jpeg"
import Alura from "../../imagenes/Alura.png"
import Oracle from "../../imagenes/Oracle.png"
import Udemy from "../../imagenes/Udemy.jpeg"
import FreeCode from "../../imagenes/freeCode.jpeg"
import AcademiaX from "../../imagenes/AcademiaX.png"
import { motion } from 'framer-motion';
const Training = ()=>{
    return (
        <motion.main className="training-containerF" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
            <TrainingCard imagen={Unitec} titulo="Ingenieria en sistemas computacionales" institution="2021-2025 - UNITEC"/>
            <TrainingCard imagen={Alura} titulo="Desarrollo de software frontend" institution="2022-2023 - Alura Latam"/>
            <TrainingCard imagen={Oracle} titulo="Desarrollo React JS" institution="2022-2023 - Oracle Next Education"/>
            <TrainingCard imagen={Udemy} titulo="Lenguajes de programacion" institution="202202023 - Oracle Next Education"/>
            <TrainingCard imagen={FreeCode} titulo="Desarrollo Frontend" institution="2021-2023 - FreeCodeCamp"/>
            <TrainingCard imagen={AcademiaX} titulo="Desarrollo FullStack" institution="2022-2023 - Academia X"/>
        </motion.main>
    )
}

export default Training;