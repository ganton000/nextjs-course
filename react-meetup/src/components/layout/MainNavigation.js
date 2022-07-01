import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {

  return (
	<header className={styles.header}>
		<div className={styles.logo}>Meetups</div>
		<nav>
			<ul className={styles.ul}>
				<li className={styles.a}>
					<Link to ='/'>All Meetups</Link>
				</li>
				<li className={styles.a}>
					<Link to ='/new-meetup'>Add New Meetup</Link>
				</li>
				<li className={styles.a}>
					<Link to ='/favorites'>My Favorites</Link>
				</li>
			</ul>
		</nav>
	</header>
  )
}

export default MainNavigation;