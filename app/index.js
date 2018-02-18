import * as singleSpa from 'single-spa';
import 'styles/index.scss';

singleSpa.registerApplication('weather-app-react', () => import('./subapps/WeatherAppContainer'), pathPrefix('weather-app-react'));
singleSpa.registerApplication('bitcoin-price-app', () => import('./subapps/BitCoinPriceContainer'), pathPrefix('bitcoin-price-app'));
// singleSpa.registerApplication('location-search-angular', () => import('./subapps/LocationSearchContainer'), pathPrefix('location-search-angular'));


singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return true; // always active
  }
}