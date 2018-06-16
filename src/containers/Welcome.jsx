import React from 'react';
import Heading from './Heading';
import ShoppingList from './ShoppingList';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            {this.props.name}'s Shopping List
                        </h2>
                    </div>
                </div>
                <Heading date={new Date()} />
                <ShoppingList />
            </div>
        );
    };
};