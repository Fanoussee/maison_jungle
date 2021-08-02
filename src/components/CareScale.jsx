import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";
import '../styles/careScale.css';

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img className="needs" src={Sun} alt="Sun-icon" />
    ) : (
      <img className="needs" src={Water} alt="Water-icon" />
    );

  return (
    <div className="needs">
      <div className="needs">
        {range.map((rangeElement) =>
          scaleValue >= rangeElement ? (
            <span key={rangeElement.toString() } /*onClick={() => alertCareScale(scaleValue, careType) }*/>{scaleType}</span>
          ) : null
        )}
      </div>
      {infoCareScale(scaleValue, careType)}
    </div>
  );
}

function infoCareScale(scaleValue, careType){
  const degres = ["peu", `modéré${careType === "light" ? 'e' : ''}`, "beaucoup"];
  const type = careType === 'light' ? 'lumière' : 'arrosage';
  return <span className={careType === "light" ? "needs info-bulle light" : "needs info-bulle water"}>
    {type} : {degres[scaleValue-1]} </span>
}

export default CareScale;
