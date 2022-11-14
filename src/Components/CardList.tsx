import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { Button } from "react-bootstrap";
import { Card } from "./Card";

// MAKE IT SO THAT CARDS ARE MADE HERE, SO TAKE IN AN ARRAY OF TASK AND MAKE CARDS FROM THEM
export function CardList(): JSX.Element {
    const [currList, modList] = useState<Task[]>([
        {
            title: "Title0",
            description: "Title0 is a test card!",
            priority: "2",
            thumbColor: "red"
        },
        {
            title: "Title1",
            description: "Title0 is also a test card!",
            priority: "1",
            thumbColor: "blue"
        },
        {
            title: "Title2",
            description: "Title2 is a test card as well!",
            priority: "3",
            thumbColor: "green"
        }
    ]); // will be [] in final (empty list, currently giving a dumby list)

    let renderList = currList.map((task: Task) => (
        <Card
            key={1}
            title={task.title}
            description={task.description}
            priority={task.priority}
            thumbColor={task.thumbColor}
        ></Card>
    )); // FIXME? going to make a let instead of const to see if I can change it in sort so that when the component re-renders
    // it will be the modified list

    function comparePriority(a: Task, b: Task): number {
        if (parseInt(a.priority) < parseInt(b.priority)) {
            return -1;
        }
        if (parseInt(a.priority) > parseInt(b.priority)) {
            return 1;
        }
        return 0;
    }

    function compareColor(a: Task, b: Task): number {
        // can make this compare color too since both are strings and it will sort the same
        if (a.thumbColor < b.thumbColor) {
            return -1;
        }
        if (a.thumbColor > b.thumbColor) {
            return 1;
        }
        return 0;
    }

    function sortIt(howTo: boolean): void {
        // going to just make two buttons, sounds more user friendly
        if (howTo) {
            // by priority
            const sorted: Task[] = currList.sort(comparePriority); // should compare based on priority
            const tmp: Task[] = sorted.map((task: Task): Task => ({ ...task }));
            console.log(
                "First, Checking output with what should be expected: [0]=" +
                    currList[0].title +
                    ", [1]=" +
                    currList[1].title +
                    ", [2]=" +
                    currList[2].title +
                    ""
            );
            modList(tmp);
            //listIt();
        } else {
            // alphabetically by color
            const sorted: Task[] = currList.sort(compareColor);
            const tmp: Task[] = sorted.map((task: Task): Task => ({ ...task }));
            console.log(
                "First, Checking output with what should be expected: [0]=" +
                    currList[0].title +
                    ", [1]=" +
                    currList[1].title +
                    ", [2]=" +
                    currList[2].title +
                    ""
            );
            modList(tmp);
            //listIt();
        }
        renderList = currList.map((task: Task) => (
            <Card
                key={1}
                title={task.title}
                description={task.description}
                priority={task.priority}
                thumbColor={task.thumbColor}
            ></Card>
        ));
        console.log(
            "Second, Checking output with what should be expected: [0]=" +
                currList[0].title +
                ", [1]=" +
                currList[1].title +
                ", [2]=" +
                currList[2].title +
                ""
        );
    }

    function addCard(inTask: Task): void {
        // need to set conditional based on creation of card, invoke with the card creation
        const newTask: Task = {
            title: inTask.title,
            description: inTask.description,
            priority: inTask.priority,
            thumbColor: inTask.thumbColor
        };
        const tmp: Task[] = currList.map((task: Task): Task => ({ ...task }));
        tmp.push(newTask);
        modList(tmp);
        //listIt();
    }

    function removeCard(inTask: Task): void {
        //need to make it so that arg is a Card
        const newNotes: Task[] = currList.filter(
            (task: Task) =>
                task.title !== inTask.title &&
                task.description !== inTask.description &&
                task.priority !== inTask.priority &&
                task.thumbColor != inTask.thumbColor
        );
        modList(newNotes);
        //listIt();
    }

    function resetList(): void {
        modList([]);
        renderList = currList.map((task: Task) => (
            <Card
                key={1}
                title={task.title}
                description={task.description}
                priority={task.priority}
                thumbColor={task.thumbColor}
            ></Card>
        ));
        //listIt();
    }

    function listIt(): void {
        // code to make a list out of an array, just using task.title for right now
        /*
        let str = "<ul>";
        currList.forEach(function (task) {
            str += "<li>" + task.title + "</li>";
        });
        str += "</ul>";
        const element = document.getElementById("taskList");
        if (element != null) element.innerHTML = str; // want to ensure this runs
        */
        // Most recently tried, does not work currList.map((task: Task) => Card(task));
    }

    // FIXME double check that the listIt script works and re-renders (ensure state is correctly used and modifies by CardList and Card)
    // FIXME Part 2: Electric Boogalo, modify the CSS to have overflow-y: auto rule for this div
    console.log(currList.length);
    console.log(currList[0]);
    console.log(currList[1]);
    console.log(currList[2]);

    return (
        <div>
            <Button onClick={resetList}>Clear the list</Button>
            <Button onClick={() => sortIt(true)}>Sort by Priority</Button>
            <Button onClick={() => sortIt(false)}>Sort by Color</Button>
            <div id="taskList">{renderList}</div>
        </div>
    );
    // FIXME need to make adding and removing based on events, namely creation of one from MakeNote and delete from however we delete
}
