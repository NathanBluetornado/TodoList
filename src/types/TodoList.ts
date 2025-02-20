import { IFilterButton } from "./FilterButton";
import { ITodoItem } from "./TodoItem";

interface ITodoList {
    title: string;
    items: ITodoItem[];
}

interface TodoListParams {
    list: ITodoList;
    setList: Function;
    filters: IFilterButton;
}

export type {ITodoList, TodoListParams}