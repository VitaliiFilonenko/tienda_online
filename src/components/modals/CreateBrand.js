import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {

        const [value, setValue] = useState('')
        const addBrand = () => {
            createBrand({name:value}).then (data =>{
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
                    Agregar marca
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Introduzca el nombre de la marca"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Cerrar</Button>
                <Button variant="outline-success" onClick={addBrand}>Agregar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;