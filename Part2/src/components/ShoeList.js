import axios from 'axios';
import React from 'react';
import {useHistory} from 'react-router-dom';

const ShoeList = ({shoes, setShoes}) => {
  const history = useHistory();

  const onClick = () => {
    axios
      .get('https://codingapple1.github.io/shop/data2.json')
      .then((result) => {
        // console.log(result.data);
        let shoesTemp = shoes.concat(result.data);
        // console.log(shoesTemp);
        setShoes(shoesTemp);
        console.log('성공');
      })
      .catch(() => {
        console.log('Error');
      });
  };

  return (
    <div className="shoe-list">
      <div className="shoe-container container">
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
      <button className="btn btn-primary" onClick={onClick}>
        더보기
      </button>
    </div>
  );
};

function ShoeItem(props) {
  let num = props.shoe.id + 1;
  return (
    <div className="shoe-item row" onClick={props.onClick} cursor={props.cursor}>
      <div className="col-md-4" cursor={props.cursor}>
        <img src={`https://codingapple1.github.io/shop/shoes${num}.jpg`} cursor={props.cursor} alt={`fig${num}`} width="100%" />
        <h4 cursor={props.cursor}>{props.shoe.title}</h4>
        <p>{props.shoe.content}</p>
      </div>
    </div>
  );
}

export default ShoeList;
