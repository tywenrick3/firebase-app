import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from './navigation/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
};

export default App;
