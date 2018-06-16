import React from 'react';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingItem: '',
            shoppingItems: [],
            boughtItems: []
        };
    }

    handleChange = (event) => {
        this.setState({
          shoppingItem: event.target.value
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
                        <div className="listMargins">
                            <div>Add item to the list</div>
                            <input
                                type="text"
                                name="shoppingItem"
                                placeholder="Add item to buy here"
                                className="col-12"
                                value={this.state.shoppingItem}
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="listMargins">
                            <div>To buy</div>
                            <ol>{this.state.shoppingItems.map((item, index) =>
                                <div key={index} className="toBuyItems row">
                                    <li onClick={() => this.addToBought(item)}>
                                        {item}
                                    </li>
                                    <span className="done"><i className="fa fa-check"></i></span>
                                </div>
                                )}
                            </ol>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="listMargins">
                            <div>Bought</div>
                            <ol>{this.state.boughtItems.map((item, index) =>
                                <div key={index} className="boughtItems row">
                                    <li onClick={() => this.addToBuy(item)}>
                                        {item}
                                    </li>
                                    <span className="delete"><i className="fa fa-times"></i></span>
                                </div>
                                )}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ShoppingList;