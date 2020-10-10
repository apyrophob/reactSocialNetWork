import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogues.module.css';


function DialoguesItem({ name, id }) {
    let path = '/dialogue/' + id;

    return (
        <div>
            {/* name - a url witch User can click on / path - for routing */}
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
    //Mapping data to JSX
    let dialogsElement = props.dialogs
        .map(d => <DialoguesItem id={d.id} name={d.name} />,);

    let messageElement = props.messages
        .map(m => <Message id={m.id} message={m.message} />);


    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <div>
                    {dialogsElement}
                </div>
                <div className='message1'>
                    {messageElement}
                </div>
            </div>
        </div>
    );
};


export default Dialogues;