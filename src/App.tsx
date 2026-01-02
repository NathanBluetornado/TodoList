import React, { useState } from 'react';
import './App.css';
import { ITodoList } from './types/TodoList';
import { IFilterButton } from './types/FilterButton';

import TodoList from './components/TodoList';
import FilterButton from './components/FilterButton';

import useStorage from './hooks/useStorage';

import filterIcon from './assets/flipButton.png'

function App() {
    const [list, setList] = useState<ITodoList>( {title:"Priority", items:[]} );
    const [secondList, setSecondList] = useState<ITodoList>( {title:"Backburner", items:[]} );
    const [dayList, setDayList] = useState<ITodoList>( {title:"Today", items:[]} );
    const [filters, setFilters] = useState<IFilterButton>( {showIncomplete:true, showComplete: true} );

    const [direction, flipDirection] = useState(false);

    useStorage(list, setList)
    useStorage(secondList, setSecondList)
    useStorage(dayList, setDayList)

    return (
        <div className="App">
            <header>
                <FilterButton filters={filters} updater={setFilters}/>
                <h1>
                    To-do list:
                </h1>
                {/* Div below to center flex arrangement as a placeholder for dark mode button */}
                {/* <div style={{width:"70px"}}></div> */}
                <button className="filter" onClick={() => {
                    flipDirection(!direction)
                }}>
                    <img src={filterIcon} alt="Filter button"/>
                </button>
            </header>
            
            <main style={{flexFlow: direction ? "wrap-reverse" : ""}}>
                <TodoList list={list} setList={setList} filters={filters}/>
                <TodoList list={secondList} setList={setSecondList} filters={filters}/>
                <TodoList list={dayList} setList={setDayList} filters={filters}/>
            </main>
        </div>
    );
}

export default App;
