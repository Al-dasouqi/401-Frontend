import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpdateForm from './UpdateForm';

class Favorite extends React.Component {

    constructor(props) {
        super(props);
        this.setState = {
            favArray: [],
            show: false,
            index: -1,
            image: '',
            name: '',
        };
    }
    componetDidMount = async () => {
        const server = 'https://localhost:3001';
        const favData = await axios.get(`${server}/getFav`);
        console.log(favData.data);
        this.setState = ({ favArray: favData.data })
    }

    delete = async (idx) => {
        const server = 'https://localhost:3001';
        const newArr = await axios.delete(`${server}/deleteFav?id=${id}`);
        this.setState = ({ favArray: newArr.data })
    }

    showUpdateForm = (idx) => {
        this.setState(
            {
                show: true,
                index: idx,
                image: this.state.favArray[idx].image,
                name: this.state.favArray[idx].name,
            }
        )
    }

    handleClose = () => {
        this.setState(
            {
                show: false,
            }
        )
    }

    updateData = async (e) => {
        e.preventDefault();
        const obj = {
            name: e.target.name.value,
            image: e.target.image.value,
            id: this.state.favArray[this.state.index]['_id']
        }

        const server = 'https://localhost:3001';
        const newData = await axios.put(`${server}/updateFav`, obj);
        this.setState = ({
            favArray: newData.data,
            show: false
        })
    }

    render() {
        return (
            <>
                <Row xs={1} md={3} className="H1">
                    {
                        this.state.favArray.map((item, idx) => (
                            <Col>
                                < Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Button variant="primary" ocClick={()=>
                                         this.showUpdateForm(idx)}>Update</Button>

                                         <Button variant="primary" ocClick={()=>
                                         this.delete(idx)}>Delete</Button>
                                    </Card.Body>
                                </Card >
                            </Col>
                        ))
                    }
                </Row>
                <UpdateForm
                show = {this.state.show}
                handleClose = {this.handleClose}
                image = {this.state.image} 
                name = {this.state.name}
                updateData = {this.updateData}
                
                />
            </>

        )
    }
}
export default Favorite;