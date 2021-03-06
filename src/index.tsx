import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  , document.querySelector('#root'));
