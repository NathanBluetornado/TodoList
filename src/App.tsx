import React, { useState } from 'react';
import './App.css';
import { ITodoList } from './types/TodoList';
import { IFilterButton } from './types/FilterButton';

import TodoList from './components/TodoList';
import FilterButton from './components/FilterButton';

import useStorage from './hooks/useStorage';

function App() {
    const [list, setList] = useState<ITodoList>( {title:"Priority", items:[]} );
    const [secondList, setSecondList] = useState<ITodoList>( {title:"Backburner", items:[]} );
    const [filters, setFilters] = useState<IFilterButton>( {showIncomplete:true, showComplete: true} );

    useStorage(list, setList)
    useStorage(secondList, setSecondList)

    return (
        <div className="App">
            <header>
                <FilterButton filters={filters} updater={setFilters}/>
                <h1>
                    To-do list:
                </h1>
                {/* Div below to center flex arrangement as a placeholder for dark mode button */}
                <div style={{width:"70px"}}></div>
            </header>
            
            <main>
                <TodoList list={list} setList={setList} filters={filters}/>
                <TodoList list={secondList} setList={setSecondList} filters={filters}/>
            </main>
        </div>
    );
}

export default App;
