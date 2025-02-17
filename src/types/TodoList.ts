import { ITodoItem } from "./TodoItem";

interface ITodoList {
    title: string;
    items: ITodoItem[];
}

interface TodoListParams {
    list: ITodoList
    setList: Function;
}

export type {ITodoList, TodoListParams}