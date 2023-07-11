import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Hello from './Hello';
import StateExample from './StateExample';
import PropsExample from './PropsExample';
import GetInputFieldData from './GetInputFieldData';
import ToggleExample from './ToggleExample';
import IfElse from './IfElse';
import Hooks from './Hooks';
import ArrayExample from './ArrayExample';
import reportWebVitals from './reportWebVitals';
import RoutingExample from './RoutingExample';
import DynamicRouting from './DynamicRouting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PropsExample name="tushar" email={"test@email.com"} others={{address:"Ujjain",age:"24"}} />
    <br></br>
    <GetInputFieldData/><br></br>
    <ToggleExample/><br></br>
    <IfElse/>
    <Hooks/>
    <ArrayExample/>
    <App/> */}
    <RoutingExample/>
    <DynamicRouting />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
