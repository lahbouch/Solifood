import React from "react";
import { connect } from "react-redux";
import {removeFromCart} from "../store/actions/actions";

function ProductItem(props){
    const {item, index} = props;
    const {product} = item;

    return (
        <div className="card shadow-lg ">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {product.name}
                </h5>
                
                <button onClick={() => props.removeFromCart(index)} className="btn btn-danger">
                    <i class="fas fa-times"></i> 
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);