import React, { useEffect, useState } from "react";
import {Card, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { formatNumber } from "../helpers/formatNum";

const Products = () => {
    
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('http://test.movilbox.co:888/test_mbox/test.php?metodo=productos');
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
            }

            return(
                componentMounted = false
            )
        }
        
        getProducts()
    },[])

    const Loading = () => {
        return(
            <>
                Loading...
            </>
        )
    } 

    const filterItem = (price,cat,mark) => {
        const updateList = data.filter((x) => x.categoria === cat)
        const updatePrice = data.filter((x) => x.valor === price )
        const updateMark = data.filter((x) => x.marca === mark)
        setFilter(updateList,updatePrice,updateMark)
    }

    const FiltersProducts = () => {
        return(
            <>
                <h2 className="product__title-filter" >Filtros</h2>
                <div className="product__filter-content" >
                    <div className="product__filter-buttons" >
                        <h5 className="product__filter-title" >Rango De Precios</h5>

                        <Button as="input" type='button' className="product__filter-button_design" onClick={() => setFilter(data)} /><h4 className="product__filter-title_button" >Todos</h4> 
                        <Button as="input" type='button' className="product__filter-button_design" onClick={() => filterItem('cop99')} /><h4 className="product__filter-title_button" > menor COP$100 </h4>  
                        <Button as="input" type='button' className="product__filter-button_design" onClick={() => filterItem('100 - 10.000')} /><h4 className="product__filter-title_button" >COP$100 - COP$10.000 </h4>  
                        <Button as="input" type='button' className="product__filter-button_design" onClick={() => filterItem('10.000 - 100.000')}/><h4 className="product__filter-title_button" >COP$10.000 - COP$100.000 </h4> 
                        <Button as="input" type='button' className="product__filter-button_design" onClick={() => filterItem('COP101.000')} /><h4 className="product__filter-title_button" >Mayor COP$100.000 </h4>
                        <h5 className="product__filter-title" >Categorias</h5>
                        <Button as="input" type='button' className="product__filter-button_design" onClick={() => filterItem('Smart Watch')} /><h4 className="product__filter-title_button" >Smart Watch </h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Smart Phone')} >Smart Phone </h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Computador')} >Computadores </h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Tablets')} >Tablets </h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Telefonos Moviles')} >Telefonos Moviles </h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Video Juegos')} > Video Juegos</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Audio')} >Audio</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Monitores')} >Monitores</h4>
                        <h5 className="product__filter-title" >Marcas</h5>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Apple')} >Apple</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('OneOdio')} >OneOdio</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Switch')} >Switch</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Google')} >Google</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Sony')} >Sony</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('OnePlus')} >OnePlus</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Logitech')} >Logitech</h4>
                        <Button as="input" type='button' className="product__filter-button_design" /><h4 className="product__filter-title_button" onClick={() => filterItem('Vivimage')} >Vivimage</h4>
                    </div>
                    <Button className="produc__filter-clear" onClick={() => setFilter(data)} >Limpiar Filtros</Button>
                </div>
                <div>
            <Col md={6} className='product__card-flex' >
                    {filter.map((product,index) => (
                        <Col key={index} md={4} className="justify-content-center d-flex product__card-design ">
                        <Card className="text product__card-content">
                          <Card.Img
                            variant="top"
                            src={product.URL}
                            alt="IMG"
                            className="card-img product__card-img"
                            />
                          <Card.Body className="card-body">
                            <Card.Text className="text-price product__card-price">{formatNumber(product.valor)}COP</Card.Text>
                            <Card.Title className="text-name product__card-title">{product.nombre}</Card.Title>
                            <Card.Text className="text-price product__card-desciption">{product.descripcion}</Card.Text>
                          </Card.Body>
                          <NavLink className="product__card-button" to={`/products/${product.nombre}`} >Añadir Al carrito</NavLink> 
                        </Card>
                      </Col>
                    ))
                    }
            </Col>
        </div>
            </>
            )
    }



    return (
                <div>
                    {loading ? <Loading/> : <FiltersProducts /> }
                </div>
    );
}

export default Products;