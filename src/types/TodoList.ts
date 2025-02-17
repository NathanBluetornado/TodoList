import { ITodoItem } from "./TodoItem";

interface ITodoList {
    title: string;
    items: ITodoItem[];
}

interface TodoListParams {
    title: string;
    items: ITodoItem[];
    setList: Function;
}

export type {ITodoList, TodoListParams}