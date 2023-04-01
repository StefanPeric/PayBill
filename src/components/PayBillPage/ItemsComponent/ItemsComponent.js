import React, {useState} from 'react';
import AddItem from "./AddItem/AddItem";

const ItemsComponent = (props) => {

    const [numOfItems, setNumOfItems] = useState(1);


    const itemList = [];
    for (let i = 0; i < numOfItems; i++) {
        itemList.push(<AddItem key = {i} persons={props.persons} changePersonToPayCallback={props.changePersonToPayCallback}/>);
    }

    const addNewItem = () => {
        setNumOfItems(numOfItems + 1);
    }

    return (
        <>
            {itemList}
            <button onClick={addNewItem}>Add Item</button>
        </>
    );
};

export default ItemsComponent;
