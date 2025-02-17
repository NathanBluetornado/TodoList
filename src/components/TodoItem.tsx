import React from 'react';
import '../styles/TodoItem.css'
import { TodoItemParams } from '../types/TodoItem';

import Checkbox from './CheckBox';

export default function Item({ id, title, complete, updater }: TodoItemParams, ) {
    return (
        <li className="item">
            <Checkbox checked={complete} setChecked={( (newValue: boolean) => updater(id, newValue))}/>
            <h2>{title}</h2>
        </li>
    );
};
