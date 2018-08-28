import React from 'react';

class ItemsBought extends React.Component {
    render() {

        const {
            boughtItems,
            addToBuy,
        } = this.props;

        return (
            <div className="listMargins">
                <div>Bought</div>
                <ol>{boughtItems.map((item, index) =>
                    <div key={index} className="boughtItems row">
                        <li onClick={() => addToBuy(item)}>
                            {item}
                        </li>
                        <span className="delete"><i className="fa fa-times"></i></span>
                    </div>
                    )}
                </ol>
            </div>
        );
    };
};

export default ItemsBought;