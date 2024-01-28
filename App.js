import React from 'react';
import {Provider} from 'react-redux';
import MainContainer from './src/MainContainer';
import {store} from './src/redux/store/Store';

const App = () => {
  console.log('I am coming into App.js file');
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
