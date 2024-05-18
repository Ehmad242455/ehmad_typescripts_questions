interface ToDoItem {
    task: string;
    completed: boolean;
}

const toDoList: ToDoItem[] = [
    { task: "Finish the report", completed: false },
    { task: "Read a book", completed: true },
    { task: "Go grocery shopping", completed: false },
    { task: "Clean the house", completed: true },
    { task: "Call Alice", completed: false }
];

function logIncompleteTasks(toDoList: ToDoItem[]): void {
    toDoList.forEach(item => {
        if (!item.completed) {
            console.log(item.task);
        }
    });
}

logIncompleteTasks(toDoList);
