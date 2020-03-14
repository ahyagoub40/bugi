import { createStackNavigator } from 'react-navigation';
import ProductDetails from './components/products-details';
import QRScanner from './components/qr-scanner';

const AppNavigator = createStackNavigator({
  ProductDetails: { screen: ProductDetails },
  QRScanner: { screen: QRScanner },
});

export default AppNavigator;