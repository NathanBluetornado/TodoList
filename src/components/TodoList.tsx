import React from 'react';
import { ITodoList, TodoListParams } from '../types/TodoList';

import TodoItem from '../components/TodoItem';

export default function List({ title, items, setList }: TodoListParams) {

    const toggleChecked = (index:number, value:boolean) => {
        setList( (curList : ITodoList) => {
            let newList : ITodoList = {title: curList.title, items: curList.items};
            newList.items[index].complete = value;
            return newList;
        });
    }

    return (
        <div className="list">
            <h2>{title}</h2>
            <ul>
            {
                items.map( (item, index) => {
                    return <TodoItem id={index} title={item.title} complete={item.complete} updater={toggleChecked} key={index}/>
                })
            }
            </ul>
        </div>
    );
};
