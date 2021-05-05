import React from "react";
import ProductItem from "../Components/ProductItem";
import ProductsApi from "../api/products";
import {Row,Col,Container} from "react-bootstrap"


export default class Products extends React.Component{

    state = {
        products: [],
    };

    componentDidMount(){
        ProductsApi.getAll()
            .then( data => {
                this.setState({
                    products: data
                })
            });
    }
// partie des recette
    render(){
        return (
            <div>
                <Row>
               <Col className="p-4" >
               <h1 className="slogan">Random <span class="for">SoliFood...</span></h1></Col>
            </Row>

                <div className="row">
                    {this.state.products.map(product => 
                        <div className={'col-3'} key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
