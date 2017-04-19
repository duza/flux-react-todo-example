/**
 * Created by everbudding on 18.4.17.
 */
import Immutable from 'immutable';
import Todo from './Todo';

export default function createStore(nameStore, initStateStore){
    if (typeof(Storage) !== "undefined") {
        if (localStorage[nameStore]) {
            console.log("Local Storage? It's possible.");
            console.log(JSON.parse(localStorage[nameStore]));
            return JSON.parse(localStorage[nameStore]);
        } else {
            const initState = initStateStore;
            localStorage.setItem(nameStore, JSON.stringify(initState));
            return initState;
        }
    } else {
        console.log("Sorry! No Web Storage support..");
    }
}

export function createTodoStore(nameStore, initStateStore){
    if (typeof(Storage) !== "undefined") {
        if (localStorage[nameStore]) {
            console.log("Local Storage? It's possible. Hey.");
            console.log(JSON.parse(localStorage[nameStore]));
            let obj = JSON.parse(localStorage[nameStore]);
            let resultMap = new Immutable.OrderedMap();
            for (var key in obj ){
                resultMap = resultMap.set(key, new Todo(obj[key]));
            }
            console.log(resultMap);
            return resultMap;
        } else {
            const initState = initStateStore;
            localStorage.setItem(nameStore, JSON.stringify(initState));
            return initState;
        }
    } else {
        console.log("Sorry! No Web Storage support..");
    }
}



function storeFunction (namespace, data) {
    if (data) {
        return localStorage.setItem(namespace, JSON.stringify(data));
    }

    var store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
}