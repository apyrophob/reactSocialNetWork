import React from 'react';
import classes from './Dialogues.module.css';

const Dialogues = (props) => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <div className={classes.dialogue}>Pasha</div>
                <div className={classes.dialogue}>Viktor</div>
                <div className={classes.dialogue}>Sanya</div>
                <div className={classes.dialogue}>Vanya</div>
                <div className={classes.dialogue}>Vadim</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>hi</div>
            </div>
        </div>
    );
};

export default Dialogues;