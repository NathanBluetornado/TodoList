import { TodoItem } from "./TodoItem";

export interface TodoList {
    title: string;
    items: TodoItem[];
}