import React from 'react';
import AddItemToList from './AddItemToList.jsx';
import ItemsToBuy from './ItemsToBuy.jsx';
import ItemsBought from './ItemsBought.jsx';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingItem: '',
            shoppingItems: [],
            boughtItems: []
        };
    }

    handleChange = ({target}) => {
        this.setState({
          shoppingItem: target.value
        });
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.setState({
              shoppingItem: '',
              shoppingItems: [...this.state.shoppingItems, this.state.shoppingItem]
            });
        }
    };

    removeItemFromList = (array, item) => {
        let i = array.indexOf(item);

        if (i != -1) {
            array.splice(i, 1);
        }

        return array;
    }

    addToBought = (item) => {
        this.removeItemFromList(this.state.shoppingItems, item);
        this.setState({
          boughtItems: [...this.state.boughtItems, item]
        });
    };

    addToBuy = (item) => {
        this.removeItemFromList(this.state.boughtItems, item);
        this.setState({
          shoppingItems: [...this.state.shoppingItems, item]
        });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <AddItemToList
                            shoppingItem={this.state.shoppingItem}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                        />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <ItemsToBuy
                            shoppingItems={this.state.shoppingItems}
                            addToBought={this.addToBought}
                        />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <ItemsBought
                            boughtItems={this.state.boughtItems}
                            addToBuy={this.addToBuy}
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default ShoppingList;