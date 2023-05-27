import { CityCard } from "./CityCard";

export function CityList(props) {
  return (
    <>
      <h2>Cities of Ukraine</h2>
      {props.cities.map((c, i) => (
        <CityCard key={i} {...c} />
      ))}
    </>
  );
}
