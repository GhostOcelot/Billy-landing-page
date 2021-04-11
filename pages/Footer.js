import styles from "../styles/Home.module.css"

export default function Header() {
	return (
		<footer className={styles.footer}>
			<section className={styles.footer_container}>
				<div>
					<ul>
						<div className={styles.muse_logo_container}>
							<li className={styles.footer_muse_logo}>
								<img src="/images/music-note-icon.svg" alt="arrow Icon" />
								Muse.ic
							</li>
						</div>
					</ul>
				</div>
				<div>
					<ul>
						<li className={styles.footer_lead}>Company</li>
						<li>About us</li>
						<li>Jobs</li>
						<li>Press</li>
						<li>Blog</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className={styles.footer_lead}>Support </li>
						<li>Contact us</li>
						<li>Cookies</li>
						<li>Privacy & Terms</li>
						<li>Sitemap</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className={styles.footer_lead}>Community </li>
						<li>Musicians</li>
						<li>Bands</li>
						<li>Forum</li>
						<li>Social Media</li>
					</ul>
				</div>
			</section>
			<div className={styles.footer_copyright_container}>
				<div className={styles.footer_copyright}>&copy; 2021, Lorem ipsum inc.</div>
				<div
					className={styles.footer_scroll_container}
					onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
				>
					<img src="/images/scroll-horizontal-icon.svg" alt="scroll icon" />
					<div>Back to top</div>
				</div>
			</div>
		</footer>
	)
}
