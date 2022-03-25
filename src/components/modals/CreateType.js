import React, {useState} from 'react';

import Button from "react-bootstrap/Button";
import {Form, Modal} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";



const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
      createType({name:value}).then (data =>{
          setValue('')
          onHide()
      })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Añadir tipo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Introduzca el nombre del tipo"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Cerrar</Button>
                <Button variant="outline-success" onClick={addType}>Agregar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;