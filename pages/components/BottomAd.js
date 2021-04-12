import styles from "./BottomAd.module.css"

export default function Footer() {
	return (
		<div className={styles.main_container}>
			<section className={styles.main}>
				<div className={styles.main_left}>
					<h4>Global trust</h4>
				</div>
				<div className={styles.main_right}>
					<div>
						<h1>More than 68,219 listeners use Muse.ic</h1>
						<p className={styles.main_right_lead}>
							Listen what do you want. In the highest quality possible.
						</p>
					</div>
				</div>
			</section>
			<div className={styles.band_logos}>
				<img src="/images/radiohead-logo.svg" alt="radiohead logo" />
				<img src="/images/muse-logo.svg" alt="radiohead logo" />
				<img src="/images/arctic-monkeys-logo.svg" alt="radiohead logo" />
				<img src="/images/bowie-logo.svg" alt="radiohead logo" />
			</div>
		</div>
	)
}
