import React, { useState } from 'react';
import '../styles/TodoList.css'

import { ITodoList, TodoListParams } from '../types/TodoList';
import { ITodoItem } from '../types/TodoItem';

import TodoItem from '../components/TodoItem';

export default function TodoList({ title, items, setList }: TodoListParams) {

    const [addButtonVisibility , setAddButtonVisibility] = useState<boolean>(false)
    const toggleAddButtonVisibility = () => setAddButtonVisibility( (v:boolean) => !v)

    const addButtonOnSubmit = (e: any) => {
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        toggleAddButtonVisibility();
        addItem({title: formJson.addListItem.toString(), complete: false})
    }

    const addItem = (item : ITodoItem) => {
        setList( (curList : ITodoList) => {
            let newList : ITodoList = {title: curList.title, items: curList.items};
            newList.items = newList.items.concat(item);
            return newList;
        });
    }

    const toggleChecked = (index:number, value:boolean) => {
        setList( (curList : ITodoList) => {
            let newList : ITodoList = {title: curList.title, items: curList.items};
            newList.items[index].complete = value;
            return newList;
        });
    }

    return (
        <div className="list">
            <div>
                <h2>{title}</h2>
                <button onClick={()=> toggleAddButtonVisibility() }>+</button>
                { addButtonVisibility && <form onSubmit={addButtonOnSubmit}>
                    <input name="addListItem"/>
                </form>}
            </div>
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
