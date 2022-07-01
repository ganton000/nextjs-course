import React, { useContext } from "react";
import { Link } from "react-router-dom";

import FavoritesContext from "../../store/favorites-context";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Meetups</div>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.a}>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li className={styles.a}>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li className={styles.a}>
                        <Link to="/favorites">
                            My Favorites
                            <span className={styles.badge}>
                                {favoritesCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
