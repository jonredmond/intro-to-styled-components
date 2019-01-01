import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Hello World</Title>
      </Wrapper>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
