import React, { useState } from "react";
import { noteData } from "./interfaces/noteData";
import { Task } from "./interfaces/task";

export function CorkBoard({
    startingNotesAndPositionInfo
}: {
    startingNotesAndPositionInfo: noteData[];
}): JSX.Element {
    //state for holding our note and position info
    const [notesAndPositionInfo, setNotesAndPositionInfo] = useState<
        noteData[]
    >(startingNotesAndPositionInfo);

    const [currentId, setCurrentId] = useState<number>(
        notesAndPositionInfo.length
    );

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

    //deletes a note and position data associated with that note based on the id
    function deleteNoteAndPosition(noteId: number) {
        setNotesAndPositionInfo(
            notesAndPositionInfo.filter(
                (noteData: noteData): boolean => noteId !== noteData.id
            )
        );
    }

    return (
        <div
            style={{
                height: "600px",
                width: "600px",
                backgroundColor: "#7E481C",
                position: "absolute",
                top: "100px",
                left: "100px"
            }}
        >
            {/* This is the part that puts every note in the list of notes onto the corkboard*/}
            {notesAndPositionInfo.map((noteData: noteData) => {
                return (
                    <div
                        key={noteData.id}
                        style={{
                            height: noteData.height + "%",
                            width: noteData.width + "%",
                            backgroundColor: "yellow",
                            position: "absolute",
                            top: noteData.top + "%",
                            left: noteData.left + "%",
                            zIndex: noteData.zIndex + "%"
                        }}
                    >
                        {/*FIXME: INSERT NOTE HERE WHEN NOTE IS DONE
                           noteData.task SHOULD BE THE INPUT TASK FOR NOTE*/}
                    </div>
                );
            })}
        </div>
    );
}