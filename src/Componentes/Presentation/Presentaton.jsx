import Hugo from '../../imagenes/Hugo.jpg'
import './Presentation.css'
import { motion } from 'framer-motion'; //Nos va a permitir agregar las transisiones en el omponente, se lo agregamos asi motion.div y podemos pasar ahora mas propiedaddes como por ejemplo initial, animate, exit

const Presentation = ()=>{
  return (
    <motion.main className="presentation-container" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
      <div className='presentation'>
        <div className="info-container">
          <h3 className='presentation-titulo'>Hola, mi nombre es <span className='h'>H</span>ugo Mejia <br/>y soy <span className='d'>D</span>esarrollador <span className='f'>F</span>ullstack <span className='j'>J</span>unior</h3>
          <p className='p-titulo'>Soy ingeniero en sistemas formado en la UNITEC y estoy certificado como desarrollador por varias instituciones importantes entre una de ellas Oracle.</p>
          <div className="links-container">
            <a href="https://github.com/HugoAdrianMejiaSoteno" className='links git'>GitHub</a>
            <a href="https://www.linkedin.com/in/hugo-mejia-dev/" className='links linkedin'>LinkedIn</a>
            <a href="https://www.instagram.com/hugo_mejia_10/" className='links instagram'>Instagram</a>
            <a href="https://drive.google.com/file/d/1lf0mJfNXCcsjvs8c0gr4jdzs6cEchuYp/view?usp=sharing" className='links drive'>Curriculo PDF</a>
          </div>
        </div>
        <div className='image-container'>
          <img src={Hugo} alt="Hugo" className='image'/>
        </div>
      </div>
    </motion.main>
  )
}

export default Presentation;