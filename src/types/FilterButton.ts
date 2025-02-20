interface IFilterButton {
    showIncomplete: boolean;
    showComplete: boolean;
}

interface FilterParams {
    filters: IFilterButton;
    updater: Function;
}

export type {IFilterButton, FilterParams}