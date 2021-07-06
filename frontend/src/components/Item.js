import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Item extends React.Component {
    render() {
        return (
            <>

                < Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        <Button variant="primary" ocClick={() => this.props.addFav(this.props.idx)}>Add To Favorite</Button>
                    </Card.Body>
                </Card >
            </>
        )
    }

}
export default Item;
