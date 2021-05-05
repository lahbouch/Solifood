import React from "react";
import tajine from "./img/tajin21.svg"
import {Row,Col,Container} from "react-bootstrap"
import Search from "./homeapi";
import {useState} from 'react';


export default function Home(){

    return (
        <Container classname="bahddivat">
           <Row>
           <Col lg={7} sm={12}>
           <div className="des_text">
           <h1 className="H1">Soli<span>Food</span></h1>
           <p className="discription">Try the best food 
           of the year.</p>
           </div>
           </Col>
          <Col lg={5} sm={0}>
            <div className="img1">
               <img src={tajine}></img>
            </div>
            </Col>
           </Row>
           
               <Row>
               <Col >
               <h1 className="slogan">Special Food, <span class="for">Just for you...</span></h1></Col>
            </Row>
            
<Search/>
        </Container>
        
        
         );
         
}

    
