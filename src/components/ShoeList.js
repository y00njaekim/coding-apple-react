import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const ShoeList = ({shoes}) => {
  const history = useHistory();

  return (
    <div className="container">
      {shoes.map((shoe) => {
        return (
          <ShoeItem
            shoe={shoe}
            key={shoe.id}
            onClick={() => {
              history.push(`detail/${shoe.id}`);
            }}
            cursor="pointer"
          ></ShoeItem>
        );
      })}
    </div>
  );
};

function ShoeItem(props) {
  let num = props.shoe.id + 1;
  return (
    <div className="row" onClick={props.onClick} cursor={props.cursor}>
      <div className="col-md-4" cursor={props.cursor}>
        <img src={`https://codingapple1.github.io/shop/shoes${num}.jpg`} cursor={props.cursor} alt={`fig${num}`} width="100%" />
        <h4 cursor={props.cursor}>{props.shoe.title}</h4>
        <p>{props.shoe.content}</p>
      </div>
    </div>
  );
}

export default ShoeList;
