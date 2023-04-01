import React, {useEffect, useState} from 'react';
import styles from './PayBillList.module.css';

const PayBillList = (props) => {

    const [persons, setPersons] = useState();

    useEffect(() => {
        setPersons(props.persons.map(person => {
            return(
                <div className={styles.ListRow}>
                    <span>{person.personName}</span>
                    <span>{person.toPay.toFixed(2)}</span>
                </div>
            );
        }));
    }, [props.persons])

    return (
        <div className={styles.PayBillList}>
            <div className={styles.ListRow} style={{borderBottom:"1px solid grey"}}>
                <span>Name</span>
                <span>Pay</span>
            </div>
            {persons}
        </div>
    );
};

export default PayBillList;
