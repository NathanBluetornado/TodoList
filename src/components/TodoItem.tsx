import React from 'react';
import '../styles/TodoItem.css'
import { TodoItem } from '../types/TodoItem';

import Checkbox from './CheckBox';

export default function Item({ title, complete, updater }: TodoItem) {
    return (
        <li className="item">
            <Checkbox checked={complete} setChecked={updater}/>
            <h2>{title}</h2>
        </li>
    );
};
