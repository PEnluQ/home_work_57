import React, {Component} from 'react';
import nanoid from 'nanoid';
import Items from "../../components/Items/Items";
import Form from "../../components/Form/Form";
import './ListBuild.css';


class ListBuild extends Component{
    state = {
          items: [
        {name:'Bottle of water', price: 25, id:nanoid()},
        {name:'Milk', price: 40, id:nanoid()},
        {name:'Bread', price: 15, id:nanoid()},
        {name:'Dinner at cafe', price: 400, id:nanoid()}
          ],
        TextItem: 'Add item',
        NumberPrice: '',
        Total: 0
    };

    changeItems = event => {
       const TextItem = event.target.value;
       this.setState({TextItem});
    };

    changePrice = event => {
        const NumberPrice = event.target.value;
        this.setState({NumberPrice});
    };

    addItem = () => {
        const item = [...this.state.items];
        let info = {name: this.state.TextItem, price: this.state.NumberPrice, id:nanoid()};
        item.push(info);
        this.setState({items : item});
    };

    removeItem = id => {
        const index = this.state.items.findIndex(i => i.id === id);
        const items = [...this.state.items];
        items.splice(index, 1);
        this.setState({items});
    };

    render() {
        return (
            <div className='container'>
                <Form
                    changeItem={this.changeItems}
                    itemT={this.state.TextItem}
                    numberP={this.state.NumberPrice}
                    changeCost={this.changePrice}
                    addItems={this.addItem}
                />
                {this.state.items.map((item) => (
                    <Items
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        removeI={() => this.removeItem(item.id)}
                    />
                ))}
            </div>
        )
    }
}

export default ListBuild;