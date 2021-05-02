import React from "react";
import firebase from "firebase";
import {db, auth, firebaseReg } from "./configformes";
import { useCollectionData } from "react-firebase-hooks/firestore";

const message = () => {
    const messages = {userid, text, room};
    const mesRef = db.collection("messages");


    return (
    <div className = "messages">
        <form onSubmit = {handleSubmit}>
            <textarea
            value = {message}
            onChange = {(e) => setMessage(e.target.value)}
            placeholder = "Enter message"
            />
            <button type = "submit" disabled = {!message}>
                Send Message
            </button>
        </form>
    </div>);
};

export default message;





