import React, { useState } from 'react';
import './App.css';
import { ITodoList } from './types/TodoList';

import TodoList from './components/TodoList';

import useStorage from './hooks/useStorage';

function App() {
    const [list, setList] = useState<ITodoList>( {title:"Priority", items:[]} );

    useStorage(list, setList)

    return (
        <div className="App">
            <header>
                <h1>
                    To-do list:
                </h1>
                <TodoList list={list} setList={setList} />
            </header>
        </div>
    );
}

export default App;
