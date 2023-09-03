import { Children } from "react";
import "./Skills-card.css"
const SkillsCard = ({titulo, icono}) =>{
    return (
        <div className="skill-container">
            <div className="skill-container-icono">
                {icono}
            </div>
            <div className="skill-titulo-container">
                <h3 className="skill-titulo">{titulo}</h3>
            </div>
        </div>
    )
}

export default SkillsCard;