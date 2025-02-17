import { useEffect, useLayoutEffect } from 'react';
import { ITodoList } from '../types/TodoList';

const useStorage = (list: ITodoList, updateList: Function) => {

    useLayoutEffect( () => {
        updateList( (curList : ITodoList)  => {   
            const storedList = localStorage.getItem(curList.title)
            if (storedList){
                let newList : ITodoList = {
                    title: curList.title, 
                    items: JSON.parse(storedList)
                };
                return newList;
            }
            else{
                return curList
            }
        })
    }, [])

    useEffect( () => {
        if (list.items.length === 0) {
            return;
        }
        localStorage.setItem(list.title, JSON.stringify(list.items));
    }, [list]);
};

export default useStorage;