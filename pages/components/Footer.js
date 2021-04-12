import styles from "./Footer.module.css"

export default function Footer() {
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
						<li className={styles.footer_lead}>
							<span>Company</span>
						</li>
						<li>
							<span>About us</span>
						</li>
						<li>
							<span>Jobs</span>
						</li>
						<li>
							<span>Press</span>
						</li>
						<li>
							<span>Blog</span>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className={styles.footer_lead}>
							<span>Support</span>
						</li>
						<li>
							<span>Contact us</span>
						</li>
						<li>
							<span>Cookies</span>
						</li>
						<li>
							<span>Privacy & Terms</span>
						</li>
						<li>
							<span>Sitemap</span>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className={styles.footer_lead}>
							<span>Community</span>
						</li>
						<li>
							<span>Musicians</span>
						</li>
						<li>
							<span>Bands</span>
						</li>
						<li>
							<span>Forum</span>
						</li>
						<li>
							<span>Social Media</span>
						</li>
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
