import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {BreadProvider} from 'material-bread';
import RootStack from './navigation';
import configureStore from './store';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const {store} = configureStore();

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <NavigationContainer>
        <BreadProvider>
          <RootStack />
        </BreadProvider>
      </NavigationContainer>
    </Provider>
  </SafeAreaProvider>
);

export default App;
