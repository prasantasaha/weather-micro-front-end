import * as singleSpa from 'single-spa';
import 'styles/index.scss';

singleSpa.registerApplication('weather-app-react', () => import('./subapps/WeatherAppContainer'), pathPrefix('weather-app-react'));
// singleSpa.registerApplication('location-search-angular', () => import('./subapps/LocationSearchContainer'), pathPrefix('location-search-angular'));


singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return true; // always active
  }
}