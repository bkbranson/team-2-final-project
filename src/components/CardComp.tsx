import React from "react";
import { Task } from "../interfaces/task";
import { EditCard } from "./EditCard";
import Card from "react-bootstrap/Card";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";
import { Button } from "react-bootstrap";

function CardComp({
    task,
    id,
    editCard,
    deleteCard
}: {
    task: Task;
    id: number;
    editCard: (id: number, newTask: Task) => void;
    deleteCard: (id: number) => void;
}): JSX.Element {
    const [, drag] = useDrag({
        //type is Card; Type determines where it can be dropped
        item: { type: ItemTypes.Card, id: id, shouldAdd: true, task: task }
    });

    const assi = task.assigned.join(", ");

    return (
        <div>
            <Card
                style={{
                    width: "200px",
                    height: "190px",
                    backgroundColor: task.thumbColor
                }}
                //ref makes the dragging of the Card Work
                ref={drag}
            >
                <div style={{ position: "absolute", top: "0", right: "0" }}>
                    <EditCard
                        id={id}
                        editCard={editCard}
                        task={task}
                    ></EditCard>
                    <Button
                        onClick={() => deleteCard(id)}
                        style={{ marginLeft: "2px", backgroundColor: "red" }}
                    >
                        X
                    </Button>
                </div>
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Card.Text>Priority: {task.priority}</Card.Text>
                    <Card.Text>Assignees: {assi}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComp;
