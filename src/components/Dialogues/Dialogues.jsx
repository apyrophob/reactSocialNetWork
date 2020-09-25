import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogues.module.css';

const DialoguesItem = (props) => {
    let path = '/dialogue/' + props.id;

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
} 

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogues = (props) => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <div className={classes.dialogue}>
                    <DialoguesItem id='1' name='Dima' />
                    <DialoguesItem id='2' name='Sasha' />
                    <DialoguesItem id='3' name='Pasha' />
                    <DialoguesItem id='4' name='Artem' />
                    <DialoguesItem id='5' name='Dima' />
                </div>
            </div>
            <div>
                <Message message='Hi, how are you?' />
                <Message message='Do you wanna go for a walk?' />
                <Message message='You are stupid bitch' />
            </div>
        </div>
    );
};

export default Dialogues;