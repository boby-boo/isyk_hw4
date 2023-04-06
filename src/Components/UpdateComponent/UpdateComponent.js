import React from "react";

class UpdateComponent extends React.Component {
    state = {
        count: 0
    }

    handlerClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count > 3)  {
            return false 
        } else {
            return true
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state.count) {
            console.log(`componentDidUpdate ${this.state.count}`)
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlerClick.bind(this)}>Click</button>
            </div>
        )
    }
}

export default UpdateComponent