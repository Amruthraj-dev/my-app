import "./div.css";
import style from "./div.module.css";
import image from "./images.jpeg";

function Div() {
  return (
    <div className="container">
      <div className="head">
        <h1>
          <b>Virat Kohli</b>
        </h1>
        <img src={image} alt="virat" width={100} height={100}></img>
      </div>
      <div className={style.foot}>
        <ul>
          <li>Padma Shri in 2017</li>
          <li>ICC Men's ODI cricketer of the year 2012</li>
          <li>ICC male cricketer of the decade 2019</li>
        </ul>
      </div>
    </div>
  );
}

export default Div;
