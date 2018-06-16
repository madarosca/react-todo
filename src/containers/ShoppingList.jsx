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
                    <div className="col-4">
                        <div className="listMargins">
                            <div>Add item</div>
                            <input
                                type="text"
                                name="shoppingItem"
                                placeholder="Add item to buy here"
                                value={this.state.shoppingItem}
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="listMargins">
                            <div>To buy</div>
                            <ol>{this.state.shoppingItems.map((item, index) =>
                                    <li
                                        key={index}
                                        onClick={() => this.addToBought(item)}
                                        className="toBuyItems"
                                    >
                                         {item}
                                    </li>
                                )}
                            </ol>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="listMargins">
                            <div>Bought</div>
                            <ol>{this.state.boughtItems.map((item, index) =>
                                <li
                                    key={index}
                                    onClick={() => this.addToBuy(item)}
                                    className="boughtItems"
                                >
                                     {item}
                                </li>
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