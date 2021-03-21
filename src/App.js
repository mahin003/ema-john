import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (
    <div>
      <Header></Header>
     <Router>
        <Switch>
          <Route path="/shop">
               <Shop></Shop>
          </Route>
          <Route path="/Order">
             <Review></Review>
          </Route>
          
          <Route path="/Inventory">
             <Inventory></Inventory>
          </Route>
          <Route path="/product/:productKey">
                 <ProductDetails></ProductDetails>
          </Route>

        </Switch>
     </Router>

    </div>
  );
}

export default App;
