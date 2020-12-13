import React from 'react';
import styles from './Chat.module.scss';
import { Avatar } from '@material-ui/core';

const Chat = ({ messages }) => {
    return (
        <div className={styles.chatContainer}>
            {
                messages && messages.length > 0 && messages.map((item, index) => {
                    if (item.id === true) {
                        return (<div className={styles.myMessage}><span>12:49pm</span><div>{item.message}</div></div>)
                    } else {
                        return (<div className={styles.yourMessage}> <Avatar key={index} src={'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'} /> <div className={styles.meesageDiv}>{item.message}</div> <span>12:49pm</span></div>);
                    }
                })
            }
        </div >);
}

export default Chat;