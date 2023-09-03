import "./AboutMe.css" ;
import HugoNaranja from '../../imagenes/Hugo-naranja.jpg'
import { motion } from 'framer-motion';

const AboutMe = ()=>{
  return (
    <motion.main className="about-container" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
      <div className="about-inicio">
        <div className="image1-container">
          <img src={HugoNaranja} alt="Hugo" className="image-HugoNaranja"/>
        </div>
        <div className="aboutme-container">
          <h1 className="titulo-aboutme"><span className="titulo-s">S</span>obre mi</h1>
                  <p className="aboutme-text">Mi nombre es Hugo Adrián Mejía Soteno, tengo 20 años y soy un ambicioso ingeniero en sistemas
          computacionales y desarrollador de software con interés en la tecnología. <br/><br/>Mi propósito es impulsar el
          crecimiento de la empresa a través de soluciones tecnológicas, beneficiando a mi equipo y a mi
          desarrollo profesional. Soy una persona muy comprometida, responsable y resiliente ante las
          adversidades, me encanta actualizarme y adaptarme a las nuevas tecnologías del mercado. Además
          dispongo con amplia disponibilidad de tiempo para seguir aprendiendo y mejorando en mi carrea
          profesional.</p>
        </div>
      </div>
    </motion.main>  
  )

}

export default AboutMe;