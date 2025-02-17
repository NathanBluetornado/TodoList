import { ITodoItem } from "./TodoItem";

export interface DeleteButtonParams {
    item: ITodoItem;
    deleter: Function;
}