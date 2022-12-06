import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import CardComp from "./CardComp";
import { MakeNote } from "./MakeNote";
import { FilterNote } from "./FilterNote";
import { cardData } from "../interfaces/cardData";
import "../CardList.css";

export function CardList(): JSX.Element {
    const [currList, modList] = useState<cardData[]>([
        {
            task: {
                title: "CISC450 - HW4",
                description: "Graphs & More!",
                priority: "medium",
                thumbColor: "Coral",
                assigned: ["Blade"]
            },
            id: 0
        },
        {
            task: {
                title: "CISC450 - HW3",
                description: "I forgot to do it :[",
                priority: "high",
                thumbColor: "Coral",
                assigned: ["Blade"]
            },
            id: 1
        },
        {
            task: {
                title: "CISC450 - Study",
                description: "Final on the 14th!!!",
                priority: "medium",
                thumbColor: "Coral",
                assigned: ["Blade"]
            },
            id: 2
        },
        {
            task: {
                title: "GEOL107 - Study",
                description: "mmm yummmy rocks",
                priority: "medium",
                thumbColor: "Plum",
                assigned: ["Blade", "Zach"]
            },
            id: 3
        },
        {
            task: {
                title: "GEOL107 - Extra Credit",
                description: "Copy definitions from the textbook",
                priority: "low",
                thumbColor: "Plum",
                assigned: ["Blade", "Zach"]
            },
            id: 4
        },
        {
            task: {
                title: "CISC437 - PS7",
                description: "Practice Set 7",
                priority: "high",
                thumbColor: "Pink",
                assigned: ["Blade", "Zach", "Tommy"]
            },
            id: 5
        },
        {
            task: {
                title: "Schedule OH Appointment w/ TA",
                description: "I have no idea what's going on",
                priority: "medium",
                thumbColor: "Orange",
                assigned: ["Blade"]
            },
            id: 6
        },
        {
            task: {
                title: "Buy More Masks",
                description: "What it sounds like.",
                priority: "low",
                thumbColor: "Orange",
                assigned: ["Brandon"]
            },
            id: 7
        },
        {
            task: {
                title: "CISC275 - Sprint Restrospective",
                description: "Notes on what we did/can do better.",
                priority: "medium",
                thumbColor: "Coral",
                assigned: ["Michael", "Blade", "Brandon"]
            },
            id: 8
        },
        {
            task: {
                title: "Steal My Dog Back",
                description: "I miss him",
                priority: "high",
                thumbColor: "Mocassin",
                assigned: ["Michael"]
            },
            id: 9
        }
    ]);
    const [displayList, modDisList] = useState<cardData[]>([
        {
            task: {
                title: "CISC450 - HW4",
                description: "Graphs & More!",
                priority: "medium",
                thumbColor: "Coral",
                assigned: ["Blade"]
            },
            id: 0
        },
        {
            task: {
                title: "CISC450 - HW3",
                description: "I forgot to do it :[",
                priority: "high",
                thumbColor: "Coral",
                assigned: ["Blade"]
            },
            id: 1
        },
        {
            task: {
                title: "CISC450 - Study",
                description: "Final on the 14th!!!",
                priority: "medium",
                thumbColor: "Coral",
                assigned: ["Blade"]
            },
            id: 2
        },
        {
            task: {
                title: "GEOL107 - Study",
                description: "mmm yummmy rocks",
                priority: "medium",
                thumbColor: "Plum",
                assigned: ["Blade", "Zach"]
            },
            id: 3
        },
        {
            task: {
                title: "GEOL107 - Extra Credit",
                description: "Copy definitions from the textbook",
                priority: "low",
                thumbColor: "Plum",
                assigned: ["Blade", "Zach"]
            },
            id: 4
        },
        {
            task: {
                title: "CISC437 - PS7",
                description: "Practice Set 7",
                priority: "high",
                thumbColor: "Pink",
                assigned: ["Blade", "Zach", "Tommy"]
            },
            id: 5
        },
        {
            task: {
                title: "Schedule OH Appointment w/ TA",
                description: "I have no idea what's going on",
                priority: "medium",
                thumbColor: "Orange",
                assigned: ["Blade"]
            },
            id: 6
        },
        {
            task: {
                title: "Buy More Masks",
                description: "What it sounds like.",
                priority: "low",
                thumbColor: "Orange",
                assigned: ["Brandon"]
            },
            id: 7
        },
        {
            task: {
                title: "CISC275 - Sprint Restrospective",
                description: "Notes on what we did/can do better.",
                priority: "medium",
                thumbColor: "Coral",
                assigned: ["Michael", "Blade", "Brandon"]
            },
            id: 8
        },
        {
            task: {
                title: "Steal My Dog Back",
                description: "I miss him",
                priority: "high",
                thumbColor: "Mocassin",
                assigned: ["Michael"]
            },
            id: 9
        }
    ]); // what is going to be displayed (due to filter)

    //maintains the id of cards
    const [currentId, setCurrentId] = useState<number>(currList.length);

    function comparePriority(a: cardData, b: cardData): number {
        if (
            (a.task.priority === "high" && b.task.priority !== "high") ||
            (a.task.priority === "medium" && b.task.priority === "low")
        ) {
            return -1;
        }
        if (
            (a.task.priority === "low" && b.task.priority !== "low") ||
            (a.task.priority === "medium" && b.task.priority === "high")
        ) {
            return 1;
        }
        return 0;
    }

    function compareColor(a: cardData, b: cardData): number {
        if (a.task.thumbColor < b.task.thumbColor) {
            return -1;
        }
        if (a.task.thumbColor > b.task.thumbColor) {
            return 1;
        }
        return 0;
    }

    function sortIt(howTo: boolean): void {
        // sorts by priority
        if (howTo) {
            const sorted: cardData[] = currList.sort(comparePriority);
            const tmp: cardData[] = sorted.map(
                (cardData: cardData): cardData => ({
                    ...cardData,
                    task: { ...cardData.task },
                    id: cardData.id
                })
            );
            const sorted2: cardData[] = displayList.sort(comparePriority);
            const tmp2: cardData[] = sorted2.map(
                (cardData: cardData): cardData => ({
                    ...cardData,
                    task: { ...cardData.task },
                    id: cardData.id
                })
            );
            modList(tmp);
            modDisList(tmp2);
        } else {
            // sorts alphabetically by color
            const sorted: cardData[] = currList.sort(compareColor);
            const tmp: cardData[] = sorted.map(
                (cardData: cardData): cardData => ({
                    ...cardData,
                    task: { ...cardData.task },
                    id: cardData.id
                })
            );
            const sorted2: cardData[] = displayList.sort(compareColor);
            const tmp2: cardData[] = sorted2.map(
                (cardData: cardData): cardData => ({
                    ...cardData,
                    task: { ...cardData.task },
                    id: cardData.id
                })
            );
            modList(tmp);
            modDisList(tmp2);
        }
    }

    function addCard(inTask: Task): void {
        const newTask: Task = {
            title: inTask.title,
            description: inTask.description,
            priority: inTask.priority,
            thumbColor: inTask.thumbColor,
            assigned: inTask.assigned
        };
        const tmp: cardData[] = currList.map(
            (cardData: cardData): cardData => ({ ...cardData })
        );
        tmp.push({ task: newTask, id: currentId });
        const tmp2: cardData[] = displayList.map(
            (cardData: cardData): cardData => ({ ...cardData })
        );
        tmp2.push({ task: newTask, id: currentId });
        setCurrentId(currentId + 1);
        modList(tmp);
        modDisList(tmp2);
    }

    function removeCard(inID: number): void {
        //removes a card from the list by id

        //filter out all cards that match the input ID
        const newNotes: cardData[] = currList.filter(
            (cardData: cardData) => cardData.id != inID
        );
        const newNotes2: cardData[] = displayList.filter(
            (cardData: cardData) => cardData.id != inID
        );
        modList(newNotes);
        modDisList(newNotes2);
    }

    function editCard(id: number, newTask: Task) {
        //overwrites the task of all cards matching id to newTask
        modList(
            currList.map((cardData: cardData): cardData => {
                if (cardData.id === id) return { task: newTask, id: id };
                return cardData;
            })
        );
        modDisList(
            displayList.map((cardData: cardData): cardData => {
                if (cardData.id === id) return { task: newTask, id: id };
                return cardData;
            })
        );
    }

    function resetList(): void {
        modList([]);
        modDisList([]);
    }

    function filterList(
        coral: boolean,
        pink: boolean,
        orange: boolean,
        moccasin: boolean,
        plum: boolean
    ): void {
        // filters the list based on modal input
        let newList = displayList.map(
            (mapcard: cardData): cardData => ({
                ...mapcard,
                task: { ...mapcard.task },
                id: mapcard.id
            })
        );
        if (coral) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Coral"
            );
        } else {
            // ensures that if a color is unfiltered it will appear back in the list
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Coral" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (pink) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Pink"
            );
        } else {
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Pink" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (orange) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Orange"
            );
        } else {
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Orange" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (moccasin) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Moccasin"
            );
        } else {
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Moccasin" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        if (plum) {
            newList = newList.filter(
                (cd: cardData) => cd.task.thumbColor !== "Plum"
            );
        } else {
            currList.map((cardD: cardData) =>
                cardD.task.thumbColor === "Plum" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : console.log("")
            );
        }
        modDisList(newList);
    }

    // FIXME Part 2: Electric Boogalo, modify the CSS to have overflow-y: auto rule for this div
    return (
        <div>
            <MakeNote addCard={addCard}></MakeNote>
            <FilterNote filterList={filterList}></FilterNote>
            <Button onClick={resetList}>Clear the list</Button>
            <Button onClick={() => sortIt(true)}>Sort by Priority</Button>
            <Button onClick={() => sortIt(false)}>Sort by Color</Button>
            <div id="CardList" className="scroll">
                {displayList.map((cardData: cardData) => {
                    return (
                        <CardComp
                            key={"card #" + cardData.id}
                            task={cardData.task}
                            id={cardData.id}
                            editCard={editCard}
                            deleteCard={removeCard}
                        ></CardComp>
                    );
                })}
            </div>
        </div>
    );
}
