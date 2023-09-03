import imgError from "../../imagenes/404.png";
import "./Error.css";
import { motion } from 'framer-motion';
const Error = () =>{
  return (
    <motion.main className="container1" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
      <img src={imgError} alt="Imagen de error 404" className="image1"/>
      <p className="text"><span className="p4">4</span>04 <span className="p">P</span>AGE <span className="n">N</span>OT <span className="f">F</span>OUND</p>
    </motion.main>
  )
}
export default Error;