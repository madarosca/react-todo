import React from 'react';

class ItemsToBuy extends React.Component {
    render() {

        const {
            shoppingItems,
            addToBought,
        } = this.props;

        return (
            <div className="listMargins">
                <div>To buy</div>
                <ol>{shoppingItems.map((item, index) =>
                    <div key={index} className="toBuyItems row">
                        <li onClick={() => addToBought(item)}>
                            {item}
                        </li>
                        <span className="done"><i className="fa fa-check"></i></span>
                    </div>
                    )}
                </ol>
            </div>
        );
    };
};

export default ItemsToBuy;