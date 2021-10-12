import React from 'react';
import {useParams} from 'react-router-dom';

const Detail = (props) => {
  const {id} = useParams();
  const imgIndex = props.shoes[id].id + 1;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${imgIndex}.jpg`} alt="shoe" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
