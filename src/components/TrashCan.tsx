import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { Task } from "../interfaces/task";
import trash from "../trash.png";

type deleteCardProps = {
    deleteNote: (id: number) => void;
};

const DeleteItem: React.FC<deleteCardProps> = (props) => {
    //Handles the dropping of things onto the trash can
    const [, drop] = useDrop({
        accept: [ItemTypes.Card],
        drop: (item: {
            type: string;
            id: number;
            shouldAdd: true;
            task: Task;
        }) => props.deleteNote(item.id)
    });

    const FULLSIZE = "100%";

    return (
        <div ref={drop} style={{ height: FULLSIZE, width: FULLSIZE }}>
            <img
                src={trash}
                style={{ height: FULLSIZE, width: FULLSIZE }}
            ></img>
        </div>
    );
};

export default DeleteItem;
