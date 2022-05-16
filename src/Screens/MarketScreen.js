import React from "react";
import { Col, Row } from "react-bootstrap";
import Search from "../components/Search/Search";
import Products from "../Products/Products";
import DefaultWrapper from "../wrappers/DefaultWrappers";

const MarketScreen = () => {
    return(
        <DefaultWrapper>
            <h1 className="market__title" >Tienda</h1>
            <Search />
            
            <Col>
            <Products />
            </Col>
        </DefaultWrapper>

    )
}

export default MarketScreen;