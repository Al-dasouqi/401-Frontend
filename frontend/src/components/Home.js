import Reat from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.setState = { allData: [] };
    }
    componetDidMount = async ()=> {
        const server = 'https://localhost:3001';
        const allData = await axios.get(`${server}/all`);
        this.setState = ({ allData: allData.data });

    }

    addFav = async (idx) => {
        const server = 'https://localhost:3001';
        const obj = {
            name: this.state.allData[idx].name,
            image: this.state.allData[idx].image,
        }
        await axios.post(`${server}/addToFav`, obj);
    }
    render() {
        return (
            <>
               <Row xs={1} md={3} className="H1"> 
                    {
                        this.state.allData.map((item, idx) => (
                            <Col>
                                <Item
                                    key={idx}
                                    item={item}
                                    idx={idx}
                                    addFav={this.addFav}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </>
        )
    }
}
export default Home;