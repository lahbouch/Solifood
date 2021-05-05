import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartIcon from "./Components/CartIcon";
import {Provider} from "react-redux";
import store from "./store/store";
import logo from "./tr.svg"
import {Row,Col,Container} from "react-bootstrap"
import logofooter from './logofooter.svg'


// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import CSS from "./App.css"

function App() {
  return (
    <Router>
    
    <div style={{ 
      backgroundImage: `url("")` 
    }}>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
        <a className="navbar-brand" href="./"><img src={logo}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/"><i class="fas fa-home"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products"><i class="fas fa-random"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" ><i class="fas fa-heart"></i></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" ><i class="fas fa-align-right"></i></Link>
            </li>
            
          </ul>
        </div>

        <CartIcon />
      </nav>


      <Route path="/" component={Home} exact />
      <Route path="/products" component={Products} exact/>
      <Route path="/products/:id" component={Product} />
      <Route path="/cart" component={Cart} />

    </div>
    <div className="bg-dark p-3 row">
      
       
      <div className="col-6"><img src={logofooter} height="70%" weight="60%" /></div>
      <div className="col-6 text-light ">copyright 2021 © Solifood all right reserved </div>

      
   
      </div>
    </div>

    </Router>
  );
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
