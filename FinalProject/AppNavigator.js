import { createStackNavigator } from 'react-navigation';
// import productsDetails from './components/products-details';
import App from './main';

const AppNavigator = createStackNavigator({
  App: { screen: App },
});

export default AppNavigator;