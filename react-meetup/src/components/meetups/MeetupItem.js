import React, { useContext } from "react";

import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

import styles from "./MeetupItem.module.css";

const MeetupItem = ({ id, image, title, address, description }) => {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(id);
        } else {
            favoritesCtx.addFavorite({
                id,
                title,
                image,
                description,
                address,
            });
        }
    };

    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite
                            ? "Remove from Favorites"
                            : "To Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
