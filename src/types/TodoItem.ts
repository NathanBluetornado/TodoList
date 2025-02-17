interface ITodoItem {
    title: string;
    complete: boolean;
}

interface TodoItemParams {
    id: number
    title: string;
    complete: boolean;
    updater: Function;
}

export type {ITodoItem, TodoItemParams}