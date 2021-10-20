import React from 'react';
import TitleBar from '../components/TitleBar';
import ShoeList from '../components/ShoeList';

const Home = ({shoes}) => {
  return (
    <>
      <TitleBar></TitleBar>
      <ShoeList shoes={shoes}></ShoeList>
    </>
  );
};

export default Home;
