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
                thumbColor: "Moccasin",
                assigned: ["Michael"]
            },
            id: 9
        },
        {
            task: {
                title: "Video Game Backlog",
                description: "Danganronpa!",
                priority: "low",
                thumbColor: "Orange",
                assigned: ["Michael"]
            },
            id: 10
        },
        {
            task: {
                title: "Video Game Backlog",
                description: "Final Fantasy 8",
                priority: "medium",
                thumbColor: "Pink",
                assigned: ["Blade"]
            },
            id: 11
        },
        {
            task: {
                title: "Video Game Backlog",
                description: "Hollow Knight",
                priority: "low",
                thumbColor: "Orange",
                assigned: ["Brandon", "Michael"]
            },
            id: 12
        },
        {
            task: {
                title: "Video Game Backlog",
                description: "Nocturne",
                priority: "high",
                thumbColor: "Orange",
                assigned: ["Michael"]
            },
            id: 13
        },
        {
            task: {
                title: "CISC320 - HW",
                description: "That was due like 4 days ago....",
                priority: "high",
                thumbColor: "Coral",
                assigned: ["Michael", "Harleen"]
            },
            id: 14
        },
        {
            task: {
                title: "Pack my Things for Winter Break",
                description: "Gotta get my stuff",
                priority: "low",
                thumbColor: "Coral",
                assigned: ["Blade", "Zach", "Miguel"]
            },
            id: 15
        },
        {
            task: {
                title: "Become a YouTuber",
                description: "Gotta get my stuff",
                priority: "low",
                thumbColor: "Plum",
                assigned: ["Frank"]
            },
            id: 16
        },
        {
            task: {
                title: "Prevent Frank from Becoming a YouTuber",
                description: "Through LITERALLY any means",
                priority: "low",
                thumbColor: "Plum",
                assigned: ["Meadow", "Frank's Mom"]
            },
            id: 17
        },
        {
            task: {
                title: "Get to Gold in OW2",
                description: "I cannot stay bronze",
                priority: "high",
                thumbColor: "Orange",
                assigned: ["Frank"]
            },
            id: 18
        },
        {
            task: {
                title: "Apply for Scholarships",
                description: "I can't take it anymore",
                priority: "low",
                thumbColor: "Coral",
                assigned: ["Blade", "Zach", "Miguel"]
            },
            id: 19
        },
        {
            task: {
                title: "Delete Herobrine",
                description: "Get him out of the game",
                priority: "high",
                thumbColor: "Plum",
                assigned: ["Blade", "Michael", "Brandon"]
            },
            id: 20
        },
        {
            task: {
                title: "Change Magic Numbers",
                description: "I want an A",
                priority: "high",
                thumbColor: "Moccasin",
                assigned: ["Blade", "Michael", "Brandon"]
            },
            id: 21
        },
        {
            task: {
                title: "Make Brownies",
                description: "mmmmm yummy",
                priority: "medium",
                thumbColor: "Moccasin",
                assigned: ["Brandon"]
            },
            id: 22
        },
        {
            task: {
                title: "Build a Table",
                description: "IKEA Table for my wife",
                priority: "low",
                thumbColor: "Pink",
                assigned: ["Blade", "Zach"]
            },
            id: 23
        },
        {
            task: {
                title: "Find a New Job",
                description: "Please",
                priority: "high",
                thumbColor: "Plum",
                assigned: ["Katherine Burke"]
            },
            id: 24
        },
        {
            task: {
                title: "Terraria Calamity Mods Installation",
                description: "Rogue ftw !!",
                priority: "medium",
                thumbColor: "Pink",
                assigned: ["Blade", "Jaylen", "Billy", "Zavier"]
            },
            id: 25
        },
        {
            task: {
                title: "Buy Flowers",
                description: "Valentine's is coming up",
                priority: "medium",
                thumbColor: "Pink",
                assigned: ["Zavier"]
            },
            id: 26
        },
        {
            task: {
                title: "Make the Tasks",
                description: "I NEED sample data",
                priority: "low",
                thumbColor: "Coral",
                assigned: ["Blade"]
            },
            id: 27
        },
        {
            task: {
                title: "Harpoon Fishing",
                description: "Fish don't feel pain",
                priority: "low",
                thumbColor: "Plum",
                assigned: ["Shreeya"]
            },
            id: 28
        },
        {
            task: {
                title: "Finish the Project",
                description: "I need it done",
                priority: "high",
                thumbColor: "Pink",
                assigned: ["Blade", "Michael", "Brandon"]
            },
            id: 29
        },
        {
            task: {
                title: "Make a Halloween Costume",
                description: "For the 31st task!",
                priority: "low",
                thumbColor: "Orange",
                assigned: ["Brandon"]
            },
            id: 30
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
                thumbColor: "Moccasin",
                assigned: ["Michael"]
            },
            id: 9
        },
        {
            task: {
                title: "Video Game Backlog",
                description: "Danganronpa!",
                priority: "low",
                thumbColor: "Orange",
                assigned: ["Michael"]
            },
            id: 10
        },
        {
            task: {
                title: "Video Game Backlog",
                description: "Final Fantasy 8",
                priority: "medium",
                thumbColor: "Pink",
                assigned: ["Blade"]
            },
            id: 11
        },
        {
            task: {
                title: "Video Game Backlog",
                description: "Hollow Knight",
                priority: "low",
                thumbColor: "Orange",
                assigned: ["Brandon", "Michael"]
            },
            id: 12
        },
        {
            task: {
                title: "Video Game Backlog",
                description: "Nocturne",
                priority: "high",
                thumbColor: "Orange",
                assigned: ["Michael"]
            },
            id: 13
        },
        {
            task: {
                title: "CISC320 - HW",
                description: "That was due like 4 days ago....",
                priority: "high",
                thumbColor: "Coral",
                assigned: ["Michael", "Harleen"]
            },
            id: 14
        },
        {
            task: {
                title: "Pack my Things for Winter Break",
                description: "Gotta get my stuff",
                priority: "low",
                thumbColor: "Coral",
                assigned: ["Blade", "Zach", "Miguel"]
            },
            id: 15
        },
        {
            task: {
                title: "Become a YouTuber",
                description: "Gotta get my stuff",
                priority: "low",
                thumbColor: "Plum",
                assigned: ["Frank"]
            },
            id: 16
        },
        {
            task: {
                title: "Prevent Frank from Becoming a YouTuber",
                description: "Through LITERALLY any means",
                priority: "low",
                thumbColor: "Plum",
                assigned: ["Meadow", "Frank's Mom"]
            },
            id: 17
        },
        {
            task: {
                title: "Get to Gold in OW2",
                description: "I cannot stay bronze",
                priority: "high",
                thumbColor: "Orange",
                assigned: ["Frank"]
            },
            id: 18
        },
        {
            task: {
                title: "Apply for Scholarships",
                description: "I can't take it anymore",
                priority: "low",
                thumbColor: "Coral",
                assigned: ["Blade", "Zach", "Miguel"]
            },
            id: 19
        },
        {
            task: {
                title: "Delete Herobrine",
                description: "Get him out of the game",
                priority: "high",
                thumbColor: "Plum",
                assigned: ["Blade", "Michael", "Brandon"]
            },
            id: 20
        },
        {
            task: {
                title: "Change Magic Numbers",
                description: "I want an A",
                priority: "high",
                thumbColor: "Moccasin",
                assigned: ["Blade", "Michael", "Brandon"]
            },
            id: 21
        },
        {
            task: {
                title: "Make Brownies",
                description: "mmmmm yummy",
                priority: "medium",
                thumbColor: "Moccasin",
                assigned: ["Brandon"]
            },
            id: 22
        },
        {
            task: {
                title: "Build a Table",
                description: "IKEA Table for my wife",
                priority: "low",
                thumbColor: "Pink",
                assigned: ["Blade", "Zach"]
            },
            id: 23
        },
        {
            task: {
                title: "Find a New Job",
                description: "Please",
                priority: "high",
                thumbColor: "Plum",
                assigned: ["Katherine Burke"]
            },
            id: 24
        },
        {
            task: {
                title: "Terraria Calamity Mods Installation",
                description: "Rogue ftw !!",
                priority: "medium",
                thumbColor: "Pink",
                assigned: ["Blade", "Jaylen", "Billy", "Zavier"]
            },
            id: 25
        },
        {
            task: {
                title: "Buy Flowers",
                description: "Valentine's is coming up",
                priority: "medium",
                thumbColor: "Pink",
                assigned: ["Zavier"]
            },
            id: 26
        },
        {
            task: {
                title: "Make the Tasks",
                description: "I NEED sample data",
                priority: "low",
                thumbColor: "Coral",
                assigned: ["Blade"]
            },
            id: 27
        },
        {
            task: {
                title: "Harpoon Fishing",
                description: "Fish don't feel pain",
                priority: "low",
                thumbColor: "Plum",
                assigned: ["Shreeya"]
            },
            id: 28
        },
        {
            task: {
                title: "Finish the Project",
                description: "I need it done",
                priority: "high",
                thumbColor: "Pink",
                assigned: ["Blade", "Michael", "Brandon"]
            },
            id: 29
        },
        {
            task: {
                title: "Make a Halloween Costume",
                description: "For the 31st task!",
                priority: "low",
                thumbColor: "Orange",
                assigned: ["Brandon"]
            },
            id: 30
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

    /*
        Returns true if the card is supposed to be filtered. Needed to know when a filter relaxed if a card should be added back to displayList
    */
    function isFiltered(
        titles: string[],
        descriptions: string[],
        card: cardData,
        low: boolean,
        medium: boolean,
        high: boolean,
        coral: boolean,
        pink: boolean,
        orange: boolean,
        moccasin: boolean,
        plum: boolean
    ): boolean {
        return (
            titles.includes(card.task.title) ||
            descriptions.includes(card.task.description) ||
            (card.task.priority === "low" && low) ||
            (card.task.priority === "medium" && medium) ||
            (card.task.priority === "high" && high) ||
            (card.task.thumbColor === "Coral" && coral) ||
            (card.task.thumbColor === "Pink" && pink) ||
            (card.task.thumbColor === "Orange" && orange) ||
            (card.task.thumbColor === "Moccasin" && moccasin) ||
            (card.task.thumbColor === "Plum" && plum)
        );
    }
    function filterList(
        titles: string[],
        descriptions: string[],
        low: boolean,
        medium: boolean,
        high: boolean,
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
        //filters the titles
        if (titles.length === 0) {
            //the "unchecked" conditon
            currList.map((cardD: cardData) =>
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
            );
        } else {
            newList = newList.filter(
                (card: cardData) => !titles.includes(card.task.title)
            );
        }
        //filters the descriptions
        if (descriptions.length === 0) {
            //the "unchecked" conditon
            currList.map((cardD: cardData) =>
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
            );
        } else {
            newList = newList.filter(
                (card: cardData) =>
                    !descriptions.includes(card.task.description)
            );
        }
        //filters the priorities
        if (low) {
            newList = newList.filter(
                (cd: cardData) => cd.task.priority !== "low"
            );
        } else {
            // ensures that if a priority is unfiltered it will appear back in the list
            currList.map((cardD: cardData) =>
                cardD.task.priority === "low" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
            );
        }
        if (medium) {
            newList = newList.filter(
                (cd: cardData) => cd.task.priority !== "medium"
            );
        } else {
            // ensures that if a priority is unfiltered it will appear back in the list
            currList.map((cardD: cardData) =>
                cardD.task.priority === "medium" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
            );
        }
        if (high) {
            newList = newList.filter(
                (cd: cardData) => cd.task.priority !== "high"
            );
        } else {
            // ensures that if a priority is unfiltered it will appear back in the list
            currList.map((cardD: cardData) =>
                cardD.task.priority === "high" &&
                displayList.findIndex(
                    (card: cardData) => card.id === cardD.id
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
            );
        }
        //filters the colors
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
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
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
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
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
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
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
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
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
                ) === -1 &&
                newList.findIndex((card: cardData) => card.id === cardD.id) ===
                    -1 &&
                !isFiltered(
                    titles,
                    descriptions,
                    cardD,
                    low,
                    medium,
                    high,
                    coral,
                    pink,
                    orange,
                    moccasin,
                    plum
                )
                    ? newList.push({ ...cardD, task: { ...cardD.task } })
                    : null
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
