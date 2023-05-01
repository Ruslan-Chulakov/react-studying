import React, { Component } from "react";
// import { ReactDOM } from "react-dom/client";

class Counter extends Component {
    static defaultProps = {
        step: 1
    };

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>0</span>
                <button type="button" onClick={evt => {
                    console.log('increment was clicked');
                    console.log('this.props', this.props)
                }}>
                    Increment by {step}
                </button>
                <button type="button">Decrement by {step}</button>
            </div>
        );
    };
};

// ReactDOM.createRoot(document.getElementById("root"))
// .render(<Counter step={5} />);

export default Counter;