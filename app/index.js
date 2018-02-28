import * as singleSpa from 'single-spa';
import 'styles/index.scss';

singleSpa.registerApplication('weather-app-react', () => import('./subapps/WeatherAppContainer'), pathPrefix('weather-app-react'));
singleSpa.registerApplication('bitcoin-price-app', () => import('./subapps/BitCoinPriceContainer'), pathPrefix('bitcoin-price-app'));


singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return true; // always active
  }
}