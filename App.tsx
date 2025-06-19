import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';

function App() {

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
