import React from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const url = process.env.REACT_APP_DBURL;
const endpoint = "meetups.json";
const urlToFetch = url + endpoint;

const NewMeetupPage = () => {
    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) => {
        fetch(urlToFetch, {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            //replace: true sets urlHistory to replace current with path whereas default gives option to go back
            navigate("/", { replace: true });
        });
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetupPage;
