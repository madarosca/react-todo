import React from 'react';

class AddItemToList extends React.Component {
    render() {

        const {
            shoppingItem,
            onChange,
            onKeyPress
        } = this.props;

        return (
            <div className="listMargins">
                <div>Add item to the list</div>
                <input
                    type="text"
                    name="shoppingItem"
                    placeholder="Add item to buy here"
                    className="col-12"
                    value={shoppingItem}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                >
                </input>
            </div>
        );
    };
};

export default AddItemToList;