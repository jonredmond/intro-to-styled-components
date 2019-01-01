import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Button from './components/button';
import Rotate from './components/rotate';
import Title from './components/title';
import Wrapper from './components/wrapper';

class App extends React.Component {
  state = {
    titleColor: 'palevioletred',
    wrapperColor: 'papayawhip'
  };

  changeTitle = () => {
    const { titleColor } = this.state;

    this.setState({
      titleColor: titleColor === 'palevioletred' ? 'seagreen' : 'palevioletred'
    });
  };

  changeWrapper = () => {
    const { wrapperColor } = this.state;

    this.setState({
      wrapperColor: wrapperColor === 'papayawhip' ? 'aquamarine' : 'papayawhip'
    });
  };

  render() {
    const { titleColor, wrapperColor } = this.state;

    return (
      <Wrapper color={wrapperColor}>
        <Rotate>
          <Title color={titleColor}>Hello World</Title>
        </Rotate>
        <Button primary onClick={this.changeWrapper}>
          Change Wrapper
        </Button>
        <Button onClick={this.changeTitle}>Change Title</Button>
      </Wrapper>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
