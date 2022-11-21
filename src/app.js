import components from './components.js';
// image
import logo from './images/icons8-disney-logo.svg';
// styles
import './styles/styles.css';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);
document.body.appendChild(components());
