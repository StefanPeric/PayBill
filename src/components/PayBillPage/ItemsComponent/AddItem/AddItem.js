import React, {useEffect, useState} from 'react';
import Select from "react-select";
import styles from './AddItem.css';

const AddItem = (props) => {

    const [price, setPrice] = useState(0);
    const [options, setOptions] = useState([])

    const [selectedOptions, setSelectedOptions] = useState(null);


    useEffect(() => {
        setOptions(props.persons.map(p => {
            return {value: p, label: p.personName}
        }))
    }, [props.persons])

    const onSelectedPerson = (event) => {
        setSelectedOptions(event)

        event.map(singlePerson => {
            props.persons.map(person => {
                if (singlePerson.value.personName === person.personName) {
                    person.toPay = price/event.length
                    props.changePersonToPayCallback(person)
                }
            })
        })
    }

    const customStyles = { multiValueRemove: (base) => ({ ...base, display: 'none' }) }

    return (
        <div className={styles.AddItem}>
            <div className={styles.AddItemPart}>
                <label htmlFor="">Price in $</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    disabled={!!selectedOptions}
                />
            </div>
            <div className={styles.AddItemPart}>
                <label htmlFor="">People</label>
                <div>
                    <Select
                        isClearable={false}
                        closeMenuOnSelect={false}
                        onChange={onSelectedPerson}
                        options={options}
                        isMulti
                        isDisabled={price <= 0}
                        clearable={false}
                        styles={customStyles}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddItem;
