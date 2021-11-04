import React from 'react';
import TitleBar from '../components/TitleBar';
import ShoeList from '../components/ShoeList';

const Home = ({shoes, setShoes}) => {
  return (
    <>
      <TitleBar></TitleBar>
      <ShoeList shoes={shoes} setShoes={setShoes}></ShoeList>
    </>
  );
};

export default Home;
