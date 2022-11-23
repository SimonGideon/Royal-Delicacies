// styles
import './styles/styles.css';
import Api from './modules/food-details-api.js';

const api = new Api();

console.log(api.get());
