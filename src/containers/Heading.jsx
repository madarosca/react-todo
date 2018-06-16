import React from 'react';

class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          time: new Date()
        });
    };

    formatDate = (date) => {
        return date.toLocaleDateString();
    };

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        The date is: {this.formatDate(this.props.date)}
                    </div>
                    <div className="col-12">
                        The time is: {this.state.time.toLocaleTimeString()}
                    </div>
                </div>
            </div>
        );
    };
};

export default Heading;