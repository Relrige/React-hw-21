import "./CityCard.css";

export function CityCard(props) {
  return (
    <div className="CityCard">
      <img src={props.image} width={210} height={200} alt={props.name}></img>
      <h3> {props.name}</h3>
      <p> {props.description}</p>
    </div>
  );
}
