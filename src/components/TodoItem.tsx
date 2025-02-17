import React from 'react';
import '../styles/TodoItem.css'
import { TodoItemParams } from '../types/TodoItem';

import Checkbox from './CheckBox';
import DeleteButton from './DeleteButton';

export default function TodoItem({ id, item, updater, deleting }: TodoItemParams, ) {
    return (
        <li className="item">
            {!deleting && <Checkbox checked={item.complete} setChecked={( (newValue: boolean) => updater(id, newValue))}/> }
            {deleting && <DeleteButton item={item} deleter={updater} />}            
            <h3>{item.title}</h3>
        </li>
    );
};
