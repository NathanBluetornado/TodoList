interface ITodoItem {
    title: string;
    complete: boolean;
}

interface TodoItemParams {
    id: number;
    item: ITodoItem;
    updater: Function;
    deleting: boolean;
}

export type {ITodoItem, TodoItemParams}