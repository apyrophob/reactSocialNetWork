import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogues.module.css';


function DialoguesItem({ name, id }) {
    let path = '/dialogue/' + id;

    return (
        <div>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

const Message = ({ message }) => {
    return (
        <div className={classes.message1}>{message}</div>
    );
}

const Dialogues = (props) => {
    //Data from the server
    let dialogs = [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Petya' },
        { id: 3, name: 'Pasha' },
        { id: 4, name: 'Artem' },
        { id: 5, name: 'Dima' },
    ]

    let messages = [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Do you wanna go for a walk?' },
        { id: 3, message: 'You are stupid bitch' },
    ]
    //Mapping data to JSX
    let dialogselement = dialogs
        .map( d => <DialoguesItem id={d.id} name={d.name} />,);

    let messageElement = messages
        .map( m => <Message id={m.id} message={m.message} />);

    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <div>
                    { dialogselement }
                </div>
            </div>
            <div className='message'>
                { messageElement }
            </div>
        </div>
    );
};

export default Dialogues;