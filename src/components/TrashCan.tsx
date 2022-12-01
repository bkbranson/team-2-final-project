import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { CardList } from "../components/CardList";

export function TrashCan(): JSX.Element {
    function deleteCard(id: number){
        id = void;
    };
    //Handles the dropping of things onto the corkboard
    const [, drop] = useDrop({
        accept: ItemTypes.Card,
        drop: (h, monitor) => deleteCard(monitor.getItem().id)
    });
    return (
        <div>
            ref={drop}
            <img src="Trash.png"></img>
        </div>
    );
}
