import React, {useState, useEffect} from 'react';
import DetailItem from '../components/DetailItem';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

// let titleH4 = styled.h4`
//   font-size: 25px;
//   color: ${(props) => props.color};
// `;

const Detail = ({shoes}) => {
  const [isAlert, setIsAlert] = useState(true);
  const [detailText, setDetailText] = useState('');

  const {id} = useParams();

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isAlert]);

  console.log('hello');

  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setDetailText(value);
  };

  return (
    <div className="detail">
      <h4 className="detail-title">Detail</h4>
      {detailText}
      <input onChange={onChange} value={detailText}></input>
      {isAlert ? <div className="alert">재고가 얼마 남지 않았습니다</div> : null}
      <DetailItem shoes={shoes} id={id}></DetailItem>;
    </div>
  );
};

export default Detail;
