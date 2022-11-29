import React from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { CorkBoard } from "./components/CorkBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DeleteNote } from "./components/DeleteNote";
import { TrashCan } from "./components/TrashCan";
import { cardData } from "./interfaces/cardData";

const sampleCorkBoard = [
    {
        task: {
            title: "fred",
            description: "also fred",
            priority: "high",
            thumbColor: "red",
            assigned: ["Definitely Fred", "Dr. Harvey"]
        },
        id: 1,
        height: 100,
        width: 250,
        top: 60,
        left: 60,
        zIndex: 1
    },
    {
        task: {
            title: "burt",
            description: "also burt",
            priority: "low",
            thumbColor: "green",
            assigned: ["I'm doing it all myself"]
        },
        id: 2,
        height: 80,
        width: 80,
        top: 20,
        left: 20,
        zIndex: 0
    }
];

function App(): JSX.Element {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="App">
                    <div>
                        <h3>CREATED BY: </h3>
                        <p>Blade Tyrrell, Brandon Branson, Michael Snead</p>
                    </div>
                    <CardList></CardList>

                    {/* CORKBOARD DIV : SIZE AND POSITION OF THE DIV DEFINES THAT OF THE CORKBOARD*/}
                    <div
                        style={{
                            height: "600px",
                            width: "800px",
                            left: "800px",
                            top: "50px",
                            position: "absolute"
                        }}
                    >
                        <CorkBoard
                            startingNotesAndPositionInfo={sampleCorkBoard}
                        ></CorkBoard>
                        <DeleteNote></DeleteNote>
                        <TrashCan
                            id={cardData.id}
                            deleteCard={cardData.id}
                        ></TrashCan>
                    </div>
                </div>
            </DndProvider>
        </>
    );
}

export default App;
