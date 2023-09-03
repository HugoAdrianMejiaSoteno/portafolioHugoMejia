import "./Contacto.css";
import React, {useState} from "react";
import Programacion from "../../imagenes/Programacion.jpg";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarEmail, validarPassword } from "./validaciones";
import { motion } from 'framer-motion';
const Contacto = ()=>{

    const [nombre, setNombre] = useState({value:"", valid:null});
    const [email, setEmail] = useState({value:"", valid:null});
    const [asunto, setAsunto] = useState({value:"", valid:null});
    const [mensaje, setMensaje] = useState({value:"", valid:null});

    return (
        <motion.main className="contacto-container" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
            <div className="imagen-contacto-container">
                <img src={Programacion} alt="Imagen de contacto" className="contacto-imagen" />
            </div>
            <div className="formulario-container">
                <div className="info-contacto-container">
                    <h1 className="contacto-titulo"><span className="blue">C</span>ontacto</h1>
                    <p className="contacto-parrafo">¿Quieres contactarme?<br/>Complete el siguiente formulario y me pondre en contacto con usted lo antes posible. (Formulario representativo)</p>
                </div>
                <div className="formulario">
                    <Box
                    component="form"
                    autoComplete="off"
                    className="caja-form"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        alert("Contactame por correo o LinkedIn ya que mi hosting de base de datos caduca cada mes :)");
                    }}
                    >
                    <TextField
                        label="Nombre completo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="text"
                        error={nombre.valid === false}
                        helperText={
                            nombre.valid === false && "Ingresa un nombre de al menos 3 caracteres."
                          }
                        value={nombre.value}
                        onChange={(e)=>{
                            const valor = e.target.value;
                            const valid = validarNombre(valor);
                            setNombre({value: valor, valid: valid});
                        }}
                        required
                    />
                    <TextField
                        required
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        error={email.valid === false}
                        helperText={
                            email.valid === false && "Ingresa un correo valido de al menos 8 caracteres."
                        }
                        value={email.value}
                        onChange={(e)=>{
                            const valor = e.target.value;
                            const valid = validarEmail(valor);
                            setEmail({value: valor, valid:valid}); 
                        }}
                    />
                    <TextField
                        required
                        label="Asunto"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="text"
                        error={asunto.valid === false}
                        helperText={
                            asunto.valid === false && "Ingresa un asunto de al menos 3 caracteres."
                        }
                        value={asunto.value}
                        onChange={(e)=>{
                            const valor = e.target.value;
                            const valid = validarNombre(valor);
                            setAsunto({value: valor, valid:valid}); 
                        }}
                    />
                    <TextField
                        required
                        label="Mensaje"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        margin="normal"
                        type="text"
                        error={mensaje.valid === false}
                        helperText={
                            mensaje.valid === false && "Ingresa un mensaje de al menos 3 caracteres."
                        }
                        value={mensaje.value}
                        onChange={(e)=>{
                            const valor = e.target.value;
                            const valid = validarNombre(valor);
                            setMensaje({value: valor, valid:valid}); 
                        }}
                        />
                        <Button variant="contained" type="submit" sx={{margin:"15px", width:"150px"}} size="large">
                            Enviar
                        </Button>
                    </Box>
                </div>
            </div>
            
        </motion.main>
    )
}

export default Contacto;