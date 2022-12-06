/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import { useDragLayer, useDrop, XYCoord } from "react-dnd";
import { ItemTypes } from "../constants";
import { noteData } from "../interfaces/noteData";
import { Task } from "../interfaces/task";
import { Note } from "./Note";
import TrashCan from "./TrashCan";

export function CorkBoard({
    startingNotesAndPositionInfo
}: {
    startingNotesAndPositionInfo: noteData[];
}): JSX.Element {
    //state for holding our note and position infos
    const [notesAndPositionInfo, setNotesAndPositionInfo] = useState<
        noteData[]
    >(startingNotesAndPositionInfo);

    //maintains the id of noteDatas as they get added to the list of notesAndPositionInfo
    const [currentId, setCurrentId] = useState<number>(
        notesAndPositionInfo.reduce(
            (currentHighest: number, noteData: noteData) =>
                Math.max(currentHighest, noteData.id),
            -1
        ) + 1
    );

    //Handles the dropping of things onto the corkboard
    // NOTE FOR ME the fields 50, 75, blah blah blah, will need to be passed from the drag (last position, etc.) No grids like chess
    const [{ item }, drop] = useDrop({
        accept: ItemTypes.Card,
        collect: (monitor) => ({
            item: monitor.getItem()
        }),
        drop: () => {
            ///*
            if (item.shouldAdd) {
                addNoteData(
                    {
                        title: item.task.title,
                        description: item.task.description,
                        priority: item.task.priority,
                        thumbColor: item.task.thumbColor,
                        assigned: item.task.assigned
                    },
                    50,
                    75,
                    currentOffset.y -
                        boardTop +
                        (grabOffset?.y - sourceOffset?.y) +
                        scrollPositionY,
                    currentOffset.x -
                        boardLeft +
                        (grabOffset?.x - sourceOffset?.x) -
                        100 +
                        scrollPositionX,
                    1
                );
            } else {
                editNoteData(
                    item.id,
                    item.task,
                    50,
                    75,
                    currentOffset.y -
                        boardTop +
                        (grabOffset?.y - sourceOffset?.y) +
                        scrollPositionY,
                    currentOffset.x -
                        boardLeft +
                        (grabOffset?.x - sourceOffset?.x - 100) +
                        scrollPositionX,
                    1
                );
            }
        }
    }); // task, height, width, top, left, zindex

    //this is the the state the keeps track of the position since use Drop is blithering useless
    const { currentOffset, grabOffset, sourceOffset } = useDragLayer(
        (monitor) => ({
            currentOffset:
                monitor.getSourceClientOffset() === null
                    ? { x: 0, y: 0 }
                    : (monitor.getSourceClientOffset() as XYCoord),
            grabOffset:
                monitor.getInitialClientOffset() === null
                    ? { x: 0, y: 0 }
                    : (monitor.getInitialClientOffset() as XYCoord),
            sourceOffset:
                monitor.getInitialSourceClientOffset() === null
                    ? { x: 0, y: 0 }
                    : (monitor.getInitialSourceClientOffset() as XYCoord)
        })
    );

    // this is the state that keeps track of the scroll positions
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const [scrollPositionX, setScrollYPositionX] = useState(0);

    //this is a function that updates the scroll positions state
    const handleScroll = () => {
        const positionY = window.pageYOffset;
        setScrollPositionY(positionY);
        const positionX = window.pageXOffset;
        setScrollYPositionX(positionX);
    };

    //this updates the scroll positions when the page is scrolled
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    //state that will be needed for when the board scales
    const [boardTop] = useState<number>(50);
    const [boardLeft] = useState<number>(700); // MODIFYING this results in issues, but the BoardSize is not 700 wide
    const [xScaleFactor] = useState<number>(1);

    ///*

    //*/
    //edits a note and position data associated with that note based on the parameters passed in
    //see noteData.ts for what these parameters are
    function editNoteData(
        noteId: number,
        newTask: Task,
        height: number,
        width: number,
        top: number,
        left: number,
        zIndex: number
    ) {
        setNotesAndPositionInfo(
            notesAndPositionInfo.map((noteAndPosition: noteData): noteData => {
                // DO NOT TURN THIS INTO A TERNARY PRETTIER AND ESLINT WILL HAVE AN ENDLESS WAR IF YOU DO
                if (noteAndPosition.id === noteId)
                    return {
                        ...noteAndPosition,
                        task: newTask,
                        height: height,
                        width: width,
                        top: top,
                        left: left,
                        zIndex: zIndex
                    };
                return noteAndPosition;
            })
        );
    }

    //adds a note and position data associuated with that note based on the parameters passed in
    //see noteData.ts for what these parameters mean
    function addNoteData(
        newTask: Task,
        height: number,
        width: number,
        top: number,
        left: number,
        zIndex: number
    ) {
        console.log("ID Added: " + currentId + "\n");
        setCurrentId(currentId + 1);

        setNotesAndPositionInfo([
            ...notesAndPositionInfo,
            {
                task: newTask,
                id: currentId,
                height: height,
                width: width,
                top: top,
                left: left,
                zIndex: zIndex
            }
        ]);
    }

    // deletes a note and position data associated with that note based on the id
    function deleteNote(noteId: number) {
        setNotesAndPositionInfo(
            notesAndPositionInfo.filter(
                (noteData: noteData): boolean => noteId !== noteData.id
            )
        );
    }

    return (
        <div
            ref={drop}
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#7E481C",
                position: "relative"
            }}
            id={"CorkBoard"}
        >
            {/* This is the part that puts every note in the list of notes onto the corkboard*/}
            {notesAndPositionInfo.map((noteData: noteData) => {
                return (
                    <div
                        key={"note: " + noteData.id}
                        style={{
                            //height: noteData.height + "px",
                            //width: noteData.width + "px",
                            backgroundColor: "yellow",
                            position: "absolute",
                            top: noteData.top + "px",
                            left: noteData.left + "px",
                            zIndex: noteData.zIndex + "%",
                            fontSize: 12 / xScaleFactor + "px",
                            maxWidth: "25%",
                            //aspectRatio: "1",
                            wordBreak: "break-word",
                            wordWrap: "break-word",
                            whiteSpace: "pre"
                        }}
                    >
                        <Note task={noteData.task} id={noteData.id}></Note>
                    </div>
                );
            })}
            <div
                style={{
                    position: "absolute",
                    bottom: "0",
                    height: "10%",
                    aspectRatio: "1"
                }}
            >
                <TrashCan deleteNote={deleteNote}></TrashCan>
            </div>
        </div>
    );
}
