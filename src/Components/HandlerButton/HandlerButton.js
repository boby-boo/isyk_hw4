import React from "react";
import Items from "../Items/Items";


class HandlerButton extends React.Component {

    state = {isVisible: true};

    handlerClick() {
        this.setState(prev => ({ isVisible: !prev.isVisible }));
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handlerClick.bind(this)} className="button__handler">
                    {this.state.isVisible ? 'Hide' : 'Show'} catalog
                </button>
                {this.state.isVisible && <Items />}
            </div>
        )
    }
}

export default HandlerButton;