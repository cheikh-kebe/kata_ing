import React from "react";
//styles
import "./jumbotron.styles.scss";
import ing from '../../assets/images/ing_hand.webp'

export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron--photo">
        <img src={ing} alt="ING hand" />
      <p className="bye-bye">
        <b style={{marginLeft: "30px"}}>On se quitte</b>
        <br/>
        <br/>
        <b style={{marginLeft: "10px"}} >mais on vous laisse</b>
        <br/>
        <br/>
        <b>entre de bonnes mains</b>
        <br/>
      </p>
      </div>
      <div className="jumbotron--text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam blanditiis, ullam voluptatem commodi temporibus labore placeat, magni aliquam cumque perspiciatis nobis inventore repellat. Ab commodi harum laboriosam quidem aperiam laborum.
        </p>
        <p className="strong">
          <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
        </p>
      </div>

    </div>
  );
};
