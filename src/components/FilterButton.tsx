import React, { useState } from 'react';
import '../styles/FilterButton.css'
import { FilterParams, IFilterButton } from '../types/FilterButton';
import filterIcon from '../assets/filterButton.png'


export default function FilterButton({ filters, updater }: FilterParams, ) {

    const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false);

    const displayOptions = () => {
        setOptionsVisibility(v => !v);
    }

    return (
        <>
            <button className="filter" onClick={ () => displayOptions()}>
                <img src={filterIcon} alt="Filter button"/>
            </button>
            {optionsVisibility &&
            <fieldset>
                    <legend>Select a maintenance drone:</legend>
                    <div>
                        <input type="checkbox" id="showComplete" name="showComplete"
                        onChange={(e) => updater( (currentFilter : IFilterButton) => { return {showIncomplete: currentFilter.showIncomplete, showComplete: e.target.checked}} )}
                        checked={filters.showComplete}/>
                        <label htmlFor="showComplete">Show Complete</label>
                    </div>

                    <div>
                        <input type="checkbox" id="showIncomplete" name="showIncomplete" 
                        onChange={(e) => updater( (currentFilter : IFilterButton) => { return {showIncomplete: e.target.checked, showComplete: currentFilter.showComplete}} )}
                        checked={filters.showIncomplete}/>
                        <label htmlFor="showIncomplete">Show Incomplete</label>
                    </div>
            </fieldset>
          }
        </>
    );
};
