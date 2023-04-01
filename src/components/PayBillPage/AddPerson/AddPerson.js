import React, {useState} from 'react';

const AddPerson = (props) => {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addPersonCallback(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add person</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" disabled={name.length < 2}/>
        </form>
    );
};

export default AddPerson;



