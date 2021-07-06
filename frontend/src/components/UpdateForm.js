import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class UpdateForm extends React.Component {
    render() {
        return (
            <>
                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.UpdateForm}>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Name" 
                                defaultValue={this.props.name}/>

                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" name='image' placeholder="Upload an image" 
                                defaultValue={this.props.image}/>
                           
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}
export default UpdateForm;

