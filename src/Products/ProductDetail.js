import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { prueba } from "../styles/icons/icons";
import DefaultWrapper from "../wrappers/DefaultWrappers";
import { telegram } from "../styles/icons/icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";


export const ProductDetail = () => {
    
    const {nombre} = useParams(); /* Parametro que se pasaria al api para poder mostrar la info en el detail */
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        alert('added to cart')
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch('http://test.movilbox.co:888/test_mbox/test.php?metodo=productos');
            setProduct( await response.json());
            setLoading(false)
        } 
        console.log(nombre)
        getProduct()
    },[])
    
    const Loading = () => {
        return(
            <div>
                Loading...
            </div>
        )
    }

    const ProductInfo = () => {
        return(
            <DefaultWrapper>
                <div>
                    <div className="product__detail-content">
                        <img className="product__detail-image" src={prueba} alt={product.nombre} />
                        <div className="product__detail-title" >
                        <h1>Samsung Galaxy S20{/* {product.nombre} */}</h1>
                        <h3>Elaborado Por Samsung</h3>
                        <h3>$780.000COP</h3>
                        <h4>disponibilidad <span>Disponible en Stock</span></h4>
                        <p>lorem ipsum dolorem sit amet dolorem ipsum amet sit ipsum amet </p>
                        <h5>
                            <img src={telegram} alt='icon' className="product__detail-icon" />
                            Envio Gratis
                        </h5>
                        </div>
                        <NavLink to='/cart' className="product__detail-button" onClick={() => addProduct(product)} > Añadir al Carrito </NavLink>
                    </div>
                </div>
            </DefaultWrapper>
            )
        }

    return(
        <div>
            <div>
                <div>
                    {loading ? <Loading /> : <ProductInfo />}
                </div>
            </div>
        </div>
    )
   
}