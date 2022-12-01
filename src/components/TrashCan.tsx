import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { noteData } from "../interfaces/noteData";
import trash from "../trash.png";

type deleteCardProps = {
    deleteNote: (id: number) => void;
};

const DeleteItem: React.FC<deleteCardProps> = (props) => {
    //Handles the dropping of things onto the trash can
    const [, drop] = useDrop({
        accept: [ItemTypes.Note],
        drop: (item: { type: string; note: noteData }) =>
            props.deleteNote(item.note.id)
    });
    return (
        <div>
            ref={drop}
            <img src={trash}></img>
        </div>
    );
};

export default DeleteItem;
