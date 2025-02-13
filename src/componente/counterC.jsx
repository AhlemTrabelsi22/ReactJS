import { Component } from "react";

export default class CounterC extends Component {
    constructor(props) {
        console.log('CounterC constructor');
        super(props);
        this.state = { 
            count: 0,
            counter: 0,
            loading: true // Ajouté pour éviter undefined
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('CounterC getDerivedStateFromProps');
        if (props.counter !== state.count) {
            return { count: props.counter };
        }
        return null;
    }

    componentDidMount() {
        console.log("CounterC componentDidMount");
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000); // Ajouté un délai pour voir l'effet du chargement
    }

    render() {
        console.log('CounterC render');
        return (
            <div>
                {this.state.loading ? (
                    <div>Loading...</div>
                ) : ( 
                    <div> 
                        <p>Count: {this.state.count}</p>
                        <p>Counter: {this.state.counter}</p>
                    </div>
                )}
            </div>
        );
    }
}
