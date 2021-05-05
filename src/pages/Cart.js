import React from "react";
import CartItem from "../Components/CartItem";
import {connect} from "react-redux";
import {Row,Col,Container} from "react-bootstrap"

// partie ajout au favorit
class Cart extends React.Component{
    render(){
        return (
            <div>
                 <Row className="p-4">
               <Col >
               <h1 className="slogan">Your favourite, <span class="for">SoliFood ...</span></h1></Col>
            </Row>

                <div className="row">
                    {this.props.cartItems.map((item, index) => 
                        <div className={'col-3'} key={item.product.id}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                </div>

                <br />
               

               
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

export default connect(mapStateToProps)(Cart);
