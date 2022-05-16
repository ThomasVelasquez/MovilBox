import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation'

const DefaultWrapper = ({children}) => {
  return (
    <div className='wrapper__content-edit'>
        <Col md={1} >
        <Navigation />
        </Col>
        <Col md={10} className='h-25' >
        <Header />
        </Col>
        {children}
    </div>
  );

}

export default DefaultWrapper;