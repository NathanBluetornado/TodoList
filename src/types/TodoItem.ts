export interface TodoItem {
    title: string;
    complete: boolean;
    updater: Function;
}