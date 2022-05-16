import React, { useState } from "react";
import DefaultWrapper from "../wrappers/DefaultWrappers";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { prueba, telegram } from "../styles/icons/icons";
import { formatNumber } from "../helpers/formatNum";
import { addCart, delCart } from "../redux/actions";


const CartScreen = () => {

    const cart = useSelector((state) => state)
    const [items, setItems] = useState(cart)
    console.log(items, setItems)

    const dispatch = useDispatch()

    const addProduct = (product) => {
        alert('added to cart')
        dispatch(addCart(product))
    }

    const removeProduct = (product) => {
        alert('deleted From Cart')
        dispatch(delCart(product))
    }

    return (
        <DefaultWrapper >
            <div className="cart__content">
               {/* {items.map((Product , index) =>{( */}

                    <Col md={8} className="cart__content-item" >
                        <div className="cart__content-design" >
                            <img className="cart__product-image" src={prueba} />
                            <div className="cart__content-title" >
                                <h3>Samsung Galaxy S20</h3>
                                <h4>Disponible en Stock</h4>
                                <h5>Cantidad:</h5>
                                <div>
                                    <button className="cart__content-button_left" onClick={removeProduct} >-</button>
                                    <input type='text' />
                                    <button className="cart__content-button_right" onClick={addProduct} >+</button>
                                    <h5 className="mt-3">
                                        <img src={telegram} alt='icon' className="cart__detail-icon" />
                                        Envio Gratis
                                    </h5>
                                </div>
                            </div>
                            <div className="cart__content-action" >
                                <h3 className="mt-3" >{formatNumber(/* cart.valor */ 12000000)}</h3>
                                <button type="button" className="btn btn-outline-dark mt-5" onClick={removeProduct} >X Eliminar</button>
                            </div>
                        </div>
                    </Col>
               {/* )})} */}

                {/* Contador */}
                <Col md={4}>
                    <div className="cart__content-total" >
                        <h3 className="mt-2 ms-3">Detalles Del Cobro</h3>
                        <hr />
                        <div className="cart__total-title ms-3 " >
                            <h4>Cantidad de Articulos {cart.length} </h4>
                            <h4>Valor {cart.valor} </h4>
                            <h5>Gatos de envio</h5>
                            <hr />
                            <h3>Total {formatNumber(/* cart.value */ 12000000)}</h3>
                            <button className='cart__button-order mt-5 ms-5' >Realizar Pedido</button>
                        </div>
                    </div>
                </Col>
            </div>
        </DefaultWrapper>
    )
}

export default CartScreen; 