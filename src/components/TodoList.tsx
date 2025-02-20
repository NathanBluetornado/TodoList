import React, { useState } from 'react';
import '../styles/TodoList.css'

import { ITodoList, TodoListParams } from '../types/TodoList';
import { ITodoItem } from '../types/TodoItem';

import TodoItem from '../components/TodoItem';

export default function TodoList({ list, setList, filters }: TodoListParams) {

    const [addButtonVisibility , setAddButtonVisibility] = useState<boolean>(false)
    const toggleAddItemVisibility = () => setAddButtonVisibility( (v:boolean) => !v)
    
    const addButtonOnSubmit = (e: any) => {
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const newItemTitle = formJson.addListItem.toString()

        if (/\S/.test(newItemTitle)){
            toggleAddItemVisibility();
            addItem({title:newItemTitle, complete: false})
        }
    }

    const addItem = (item : ITodoItem) => {
        setList( (curList : ITodoList) => {
            let newList : ITodoList = {title: curList.title, items: curList.items};
            newList.items = newList.items.concat(item);
            return newList;
        });
    }

    const [deleteButtonVisibility , setDeleteButtonVisibility] = useState<boolean>(false)
    const toggleDeleteButtonVisibility = () => setDeleteButtonVisibility( (v:boolean) => !v)

    const deleteItem = ( itemToRemove : ITodoItem) => {
        setList( (curList : ITodoList) => {
            let newList : ITodoList = {title: curList.title, items: curList.items.filter( item => item !== itemToRemove)};
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
                <button onClick={()=> toggleDeleteButtonVisibility()}>-</button>
                <h2>{list.title}</h2>
                <button onClick={()=> toggleAddItemVisibility() }>+</button>
            </div>
            <ul>
            {
                // eslint-disable-next-line array-callback-return
                list.items.map( (item, index) => {
                    if( (item.complete && filters.showComplete) ||
                        (!item.complete && filters.showIncomplete) ){
                        return <TodoItem id={index} item={item}
                        updater={deleteButtonVisibility ? deleteItem : toggleChecked} 
                        deleting={deleteButtonVisibility} key={index}/>
                    }
                })
            }
                
            { addButtonVisibility && 
                <form onSubmit={addButtonOnSubmit}>
                    <input className="itemInput" name="addListItem"/>
                </form>
                }
            </ul>
        </div>
    );
};
