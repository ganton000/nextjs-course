import React, { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const url = process.env.REACT_APP_DBURL;
const endpoint = "meetups.json";
const urlToFetch = url + endpoint;

const AllMeetupsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=> {
        fetch(urlToFetch
            ).then(response => response.json()
            ).then(data => {
                setIsLoading(false);
                setLoadedMeetups(data);
            })



    },[])

    if (isLoading) {
        return (
            <section>
                <p>Loading ...</p>
            </section>
        )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
};

export default AllMeetupsPage;
