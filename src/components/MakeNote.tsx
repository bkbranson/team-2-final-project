import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export function MakeNote() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    //FIXME: Use color to set thumbtack color when modal is made
    const [color, setColor] = useState("red");
    const colors = ["red", "pink", "orange", "blue", "black"];
    const [newNote, setNote] = useState({
        title: "placeholder",
        description: "",
        priority: "low",
        thumbColor: "red"
    });

    const [priority, setPriority] = useState("low");
    const priorities = ["low", "medium", "high"];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const colorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    const priorityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(event.target.value);
    };

    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const descHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(event.target.value);
    };

    const createNote = () => {
        setNote({
            title: title,
            description: description,
            priority: priority,
            thumbColor: color
        });
        handleClose();
        console.log(newNote);
    };

    return (
        <>
            <Button onClick={handleShow}>Make Note</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a New Note:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="makeNoteTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="textarea"
                                placeholder="Note title..."
                                value={title}
                                onChange={titleHandler}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="makeNoteDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={descHandler}
                            />
                        </Form.Group>
                        <Form.Label>Priority</Form.Label>
                        <Form.Group className="MakeNoteButtons">
                            {/* Radio buttons and all of their options!! Also disabling eslint because infinite loop */}
                            {/* eslint-disable-next-line no-extra-parens */}
                            {priorities.map((p: string) => (
                                <>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        id="priorityButtons"
                                        value={p}
                                        label={p}
                                        onChange={priorityHandler}
                                    />
                                </>
                            ))}
                        </Form.Group>
                        <Form.Label>Thumbtack Color</Form.Label>
                        <Form.Group className="MakeNoteButtons">
                            {/* Radio buttons and all of their options!! */}
                            {/* eslint-disable-next-line no-extra-parens */}
                            {colors.map((c: string) => (
                                <>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        id="colorButtons"
                                        value={c}
                                        label={c}
                                        onChange={colorHandler}
                                    />
                                </>
                            ))}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={createNote}>Create!</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}