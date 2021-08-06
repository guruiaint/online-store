import React, { Component } from 'react';
import Item from "./item";
import ItemService from "../Services/itemService";

class Catalog extends Component {
    state = { 
        catalog: []
     };

    render() { 
        return ( 
            <div className="catalog">
                <h3>Please take a look at our excellent products!</h3>
                <h5>We have {this.state.catalog.length} different items for you to choose!</h5>

                {this.state.catalog.map(obj => <Item key={obj._id} data={obj}></Item>)}
            </div>
         );
    }
    //best place to load data from server
    //executed after initial render
    componentDidMount(){
        let service = new ItemService();
        let data = service.getCatalog();
        console.log(data);
        this.setState({catalog: data});
    }
}
 
export default Catalog;