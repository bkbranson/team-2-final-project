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
    //CONSTANTS
    const CARDWIDTH = "100%";

    const [, drag] = useDrag({
        //type is Card; Type determines where it can be dropped
        item: { type: ItemTypes.Card, id: id, shouldAdd: true, task: task }
    });

    const assi = task.assigned.join(", ");

    return (
        <div>
            <Card
                style={{
                    width: CARDWIDTH,
                    display: "inline-block",
                    backgroundColor: task.thumbColor,
                    wordBreak: "break-all",
                    wordWrap: "break-word",
                    whiteSpace: "initial"
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
                <Card.Body style={{ whiteSpace: "pre" }}>
                    <Card.Title
                        style={{
                            wordBreak: "break-all",
                            wordWrap: "break-word",
                            whiteSpace: "initial"
                        }}
                    >
                        {task.title}
                    </Card.Title>
                    <Card.Text
                        style={{
                            wordBreak: "break-all",
                            wordWrap: "break-word",
                            whiteSpace: "initial"
                        }}
                    >
                        {task.description}
                    </Card.Text>
                    <Card.Text
                        style={{
                            wordBreak: "break-all",
                            wordWrap: "break-word",
                            whiteSpace: "initial"
                        }}
                    >
                        Priority: {task.priority}
                    </Card.Text>
                    <Card.Text
                        style={{
                            wordBreak: "break-all",
                            wordWrap: "break-word",
                            whiteSpace: "initial"
                        }}
                    >
                        Assignees: {assi}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComp;
