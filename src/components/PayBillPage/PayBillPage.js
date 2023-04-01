import React, {useState} from 'react';
import AddPerson from "./AddPerson/AddPerson";
import PayBillList from "./PayBillList/PayBillList";
import styles from './PayBillPage.module.css';
import ItemsComponent from "./ItemsComponent/ItemsComponent";

const PayBillPage = () => {

    const [persons, setPersons] = useState([]);

    const addPerson = (personName) => {
        setPersons([...persons, {personName: personName, toPay: 0}]);
    }

    const changePersonsToPay = (changePerson) => {
        persons.map(p => {
            if (changePerson.personName === p.personName) {
                setPersons([...persons])
            }
        })
    }

    return (
        <div className={styles.PayBillPage}>
            <AddPerson addPersonCallback={addPerson}/>
            <ItemsComponent persons={persons} changePersonToPayCallback={changePersonsToPay}/>
            <PayBillList persons={persons}/>
        </div>
    );
};

export default PayBillPage;