import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import Welcome from './containers/Welcome';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    componentDidMount() {
        let person = prompt("Please enter your name", this.state.name);
        this.setState({
            name: person
        });
    }

    render() {
        return (
            <div>
                <Welcome name={this.state.name} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));