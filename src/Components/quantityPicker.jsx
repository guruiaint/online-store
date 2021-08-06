import React, { Component } from 'react'

class QuantityPicker extends Component {
    state = { 
        quantity: 1
     }
    render() { 
        return ( 
            <div className="quantity-picker">
                <button onClick={this.decrease} className="btn btn-sm btn-primary">-</button>
                {this.state.quantity}
                <button onClick={this.increase} className="btn btn-sm btn-primary">+</button>
            </div>
         );
    }

    increase = () => {
        let qnty = this.state.quantity + 1;
        if(qnty < 21) {
            this.setState({quantity: qnty});
        }
    };
    decrease = () => {
        let qnty = this.state.quantity - 1;
        if(qnty > 0) {
            this.setState({quantity: qnty});
        }
    };
}
 
export default QuantityPicker;