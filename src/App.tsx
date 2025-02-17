import React, { useState } from 'react';
import './App.css';
import { ITodoList } from './types/TodoList';

import TodoList from './components/TodoList';

import useStorage from './hooks/useStorage';

function App() {
    const [list, setList] = useState<ITodoList>( {title:"Priority", items:[]} );
    const [secondList, setSecondList] = useState<ITodoList>( {title:"Backburner", items:[]} );

    useStorage(list, setList)
    useStorage(secondList, setSecondList)

    return (
        <div className="App">
            <header>
                <h1>
                    To-do list:
                </h1>
            </header>
            
            <main>
                <TodoList list={list} setList={setList}/>
                <TodoList list={secondList} setList={setSecondList}/>
            </main>
        </div>
    );
}

export default App;
