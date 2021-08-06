import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./item.css";

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="item">
                <img src={"/images/products/" + this.props.data.image} alt="images" />

                <h5>{this.props.data.title}</h5>

                <label> Total ${this.props.data.price.toFixed(2)}</label>
                <label> Price ${this.props.data.price.toFixed(2)}</label>

                <QuantityPicker></QuantityPicker>
                <button className="btn btn-sm btn-info">Add to cart
                <i className="fa fa-cart-plus"></i></button>
            </div>
         );
         
    }
}
 
export default Item;