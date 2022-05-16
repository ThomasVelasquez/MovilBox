import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MarketScreen from "../Screens/MarketScreen";
import CartScreen from "../Screens/CartScreen";
import { ProductDetail } from "../Products/ProductDetail";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={MarketScreen} />
                    <Route path='/tienda' component={MarketScreen} />
                    <Route exact path='/cart' component={CartScreen} />
                    <Route  path='/products/:id' component={ProductDetail} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;