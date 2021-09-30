import 'normalize.css';
import { Component } from 'react';

import { Container } from './App.styled';
import Searchbar from '../Components/Searchbar';
import BtnLoadMore from '../Components/Button';

export default class App extends Component {
  state = {
    //
  };
  render() {
    return (
      <>
        <Container>
          <Searchbar />
        </Container>
        <BtnLoadMore />
      </>
    );
  }
}
