import React from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { CorkBoard } from "./components/CorkBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
                    <div
                        style={{
                            height: "600px",
                            width: "700px",
                            position: "absolute"
                            //backgroundColor: "red"
                        }}
                    >
                        <h2>
                            <b>THE CORKBOARD OF ALL TIME</b>
                        </h2>
                        <p>
                            <h5>CREATED BY: </h5>
                            Blade Tyrrell, Brandon Branson, Michael Snead
                        </p>
                        {/* CARDLIST DIV : SIZE AND POSITION OF THE DIV DEFINES THAT OF THE CARDLIST*/}
                        <div style={{}}>
                            <CardList></CardList>
                        </div>
                    </div>
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
                    </div>
                </div>
            </DndProvider>
        </>
    );
}

export default App;
