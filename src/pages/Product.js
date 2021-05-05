import React from "react";
import {getById} from "../api/products";
import {addToCart} from "../store/actions/actions";
import {connect} from "react-redux";


class Product extends React.Component{

    state={
        loading: true,
        quantity: 0,
        product: {}
        
    };

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id))
            .then(product => {
                this.setState({
                    product:product,
                    loading: false
                });
            })
    }

    handleQuantity = (event) => {
        const value = event.target.value;

        if(value < 0)
            return ;

        this.setState({
            quantity: value
        })
    }

    addToCart = (product) => {
        this.props.addToCart(product, this.state.quantity);
    }

    render(){
        if(this.state.loading)
            return 'Loading ..';

        const product = this.state.product;
        const quantity = this.state.quantity;

        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.image} width={'70%'}/>
                        <h1 className="pname">Ingredients</h1>
                        <p className="pdes">{product.strIngredient1}</p>
                        <p className="pdes">{product.strIngredient2}</p>
                        <p className="pdes">{product.strIngredient3}</p>
                        <p className="pdes">{product.strIngredient4}</p>
                        <p className="pdes">{product.strIngredient5}</p>
                        <p className="pdes">{product.strIngredient6}</p>
                        <p className="pdes">{product.strIngredient7}</p>
                        <p className="pdes">{product.strIngredient8}</p>
                        <p className="pdes">{product.strIngredient9}</p>
                        <p className="pdes">{product.strIngredient10}</p>
                        <p className="pdes">{product.strIngredient11}</p>



                        </div>
                    <div className="col-6">
                    <h1 className="pname">{product.name}</h1>


                        <p className="pdes">{product.description}</p>
                        


                        
                        
                        <br /><br />

                        

                        <button className="btn btn-danger" onClick={() => this.addToCart(product)}>
                           <i class="fas fa-heart "></i>
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
    };
}

export default connect(null, mapDispatchToProps)(Product);
