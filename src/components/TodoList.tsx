import React from 'react';
import { TodoList } from '../types/TodoList';

export default function List({ title, items }: TodoList) {
      
    return (
        <div className="list">
            <h2>{title}</h2>
            <ul>
            {
                items.map( (item, index) => {
                    return <li key={index}>
                        <input type='checkbox' defaultChecked={item.complete}></input>
                        {item.title}
                    </li>
                })
            }
            </ul>
        </div>
    );
};
