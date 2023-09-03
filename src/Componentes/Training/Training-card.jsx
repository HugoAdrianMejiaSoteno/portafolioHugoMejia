import "./Training-card.css";

const TrainingCard = ({imagen, titulo, institution})=>{
  return (
    <div className="card-container">
      <div className="training-container">
          <img src={imagen} alt="" className="image-training" />
      </div>
      <div className="text-training-container">
        <h3 className="titulo-training">{titulo}</h3>
        <p className="text-training">{institution}</p>
      </div>
    </div>
  )
}

export default TrainingCard;