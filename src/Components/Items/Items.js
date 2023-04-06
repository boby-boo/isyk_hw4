import React from "react";
import Spinner from "../Spinner/Spinner";

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: null,
        }
    }

    componentDidMount() {
        alert('Component is opened')

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(item => {
                this.setState({listItems: item})
            })
            .catch(error => console.log(error))
    }

    componentWillUnmount() {
        alert('Component is closed')
    }

    render() {

        if (!this.state.listItems) {
            return (
                <>
                    <h1>Loading</h1>
                    <Spinner />
                </>
            )
        }
        
        return (
                <ul className="cards__row">
                    {this.state.listItems.map(item => {
                        const {id, title, image, price, description} = item;
                        return (
                            <li key={id} className="card">
                                <h2>{title}</h2>
                                <div className="card__image">
                                <img src={image} alt="image"/>
                                </div>
                                <p>{description}</p>
                                <span>Price: {price}$</span>
                            </li>
                        )
                    })}
                </ul>
        )
    }
}

export default Items