import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonGroup, Button } from 'react-bootstrap';
import SocialMedia from './Components/Test/socialmedia';
import instagram from './Components/Test/assets/instagram.svg';
import github from './Components/Test/assets/github.svg';

const Cointainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  top: 10%;
  left: 35%;
  transform: translateY(-25%, -25%);

  width: 15rem;
  height: 25rem;
  border: 1px solid #434343;
  border-radius: 4px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 100px;
  font-weight: bolder;
  margin-bottom: 100px;
`;

const BtnGrupe = styled(ButtonGroup)`
  top: 24%;
  left: 21%;
  -ms-transform: translateY(-25%);
  transform: translateY(-25%);
  margin-bottom: 100px;
`;

const Line = styled.div`
  height: 1px;
  width: 240px;
  border-bottom: 1px solid #434343;
  margin-bottom: 0;
`;

const App = () => {
  const [count, setCount] = useState(0);

  const dec = () => {
    setCount(count - 1);
  };

  const up = () => {
    setCount(count + 1);
  };

  return (
    <Cointainer>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
      />
      <Wrapper className="row">
        <Title className="col-sm-12 my-auto">{count}</Title>
        <BtnGrupe>
          <Button
            className="col-6 align-self-center"
            variant="primary"
            size="lg"
            onClick={up}
          >
            Add
          </Button>
          <Button
            className="col-6 align-self-center"
            variant="danger"
            size="lg"
            onClick={dec}
          >
            Dec
          </Button>
        </BtnGrupe>
        <Line />
        <SocialMedia src={instagram} to="https://www.instagram.com/" />
        <SocialMedia src={github} to="https://github.com/axelburling" />
      </Wrapper>
    </Cointainer>
  );
};

export default App;
