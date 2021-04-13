import styles from "./Header.module.css"

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.top_menu}>
					<li className={styles.muse_logo}>
						<img src="/images/music-note-icon.svg" alt="arrow Icon" />
						Muse.ic
					</li>
					<li className={styles.top_menu_item}>Features</li>
					<li className={styles.top_menu_item}>Pricing</li>
					<li className={styles.top_menu_item}>Library</li>
					<li className={styles.top_menu_item}>
						Explore
						<img className={styles.top_menu_arrow} src="/images/arrow-icon.svg" alt="arrow Icon" />
					</li>
				</ul>
				<button className={styles.get_started_btn}>Get Started</button>
			</nav>
			<section className={styles.header_main}>
				<h1>
					Listen
					<br />
					Like <br />
					Never <br />
					Before<span className={styles.full_stop_blue}>.</span>
				</h1>
				<p>We offer music in 100x better quality than our competitors. Say good bye to FLAC 👋</p>
				<div className={styles.action}>
					<button className={styles.get_started_btn}>Get Started</button>
					<p className={styles.see_it_in_action}>
						<img src="images/youtube-icon.svg" alt="youtube icon" /> See it in Action!
					</p>
				</div>
				<div className={styles.scroll_section}>
					<p>
						<img src="images/scroll-horizontal-icon.svg" alt="scroll icon" />
						Scroll to explore
					</p>
				</div>
			</section>
			<div className={styles.circle_big}></div>
			<div className={styles.circle_yellow}></div>
			<div className={styles.circle_pink}></div>
			<div className={styles.headphones_container}>
				<img src="images/headphones.svg" alt="white headphones" />
			</div>
		</header>
	)
}
