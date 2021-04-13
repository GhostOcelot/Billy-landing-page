import React, { useContext, useState } from "react"
import { Context } from "../pages/index"
import Slider from "./Slider"
import styles from "./Main.module.css"

export default function Main() {
	const [currentAlbum, setCurrentAlbum] = useState(1)
	const [albums, setAlbums] = useContext(Context)

	return (
		<main className={styles.main_container}>
			<div className={styles.shadow_cover}></div>
			<div className={styles.main}>
				<div className={styles.main_left}>
					<h4>Top notch sound</h4>
					<p>
						<span>
							{currentAlbum.toLocaleString("en-US", {
								minimumIntegerDigits: 2,
							})}
						</span>
						<span className={styles.horizontal_divider}></span>
						<span>
							{albums.length.toLocaleString("en-US", {
								minimumIntegerDigits: 2,
							})}
						</span>
					</p>
					<div>
						<button>
							<img src="images/arrow-left.svg" alt="arrow left" />
						</button>
						<button>
							<img src="images/arrow-right.svg" alt="arrow right" />
						</button>
					</div>
				</div>
				<section className={styles.main_right}>
					<div>
						<h1>The world’s best quality audio ever.</h1>
						<p className={styles.main_right_lead}>
							Over 100 years of research has led us to develop new quality, which is 100x times
							better than FLAC.
						</p>
					</div>
					<Slider />
				</section>
			</div>
		</main>
	)
}
