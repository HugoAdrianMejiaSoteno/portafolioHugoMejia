import "./Proyecto.css";
import Button from '@mui/material/Button';

const Proyecto = ({imagen, titulo, descripcion, link, repositorio, imagenes})=>{
    return (
        <div className="Proyecto-container">
            <div className="imagen-proyecto-container">
                <img src={imagen} alt="imagen de proyecto" className="imagen-proyecto" />
            </div>
            <div className="info-proyecto">
                <div className="textos-proyecto">
                    <h3 className="titulo-proyecto">{titulo}</h3>
                    <p className="descripcion-proyecto">{descripcion}</p>
                    <div className="imgTecnologia-container">
                        {imagenes.map((img, id)=><img className="imagen-tec" src={img} key={id}/>)}
                    </div>
                </div>
                <div className="botones-proyecto">
                    <Button variant="outlined" size="medium" className="MuiButton-root" href={link} >Ver demo</Button>
                    <Button variant="contained" size="medium" className="prueba" href={repositorio}>Repositorio</Button>
                </div>
            </div>
        </div>
    )

}

export default Proyecto;