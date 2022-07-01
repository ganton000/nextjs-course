import React from "react";

import MeetupItem from "./MeetupItem";

import styles from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
    return (
        <ul className={styles.list}>
            {meetups.map(({ id, image, title, address, description }) => (
                <MeetupItem
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                    address={address}
                    description={description}
                />
            ))}
        </ul>
    );
};

export default MeetupList;
