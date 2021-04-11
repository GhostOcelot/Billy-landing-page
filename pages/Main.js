import React, { useContext } from "react"
import { Context } from "./index"
import styles from "../styles/Home.module.css"

export default function Header() {
	const [albums, setAlbums] = useContext(Context)

	return (
		<main className={styles.main}>
			<div className={styles.shadow_cover}></div>
			<div className={styles.main_container}>
				<div className={styles.main_container_left}>
					<h4>Top notch sound</h4>

					<p>
						01 <span className={styles.horizontal_divider}></span> 06
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
				<section className={styles.main_container_right}>
					<div>
						<h1>The world’s best quality audio ever.</h1>
						<p className={styles.main_container_right_lead}>
							Over 100 years of research has led us to develop new quality, which is 100x times
							better than FLAC.
						</p>
					</div>
					<div className={styles.carousel_container}>
						{albums.map(album => {
							console.log(album)
							return (
								<div className={styles.carousel_item} key={album.collectionId}>
									<div className={styles.album_thumbnail}>
										<img
											src={album.artworkUrl100.slice(0, -13) + "1000x1000bb.jpg"}
											alt="album cover picture"
										/>
									</div>
									<p className={styles.album_title}>{album.collectionName}</p>
									<p className={styles.album_artist}>{album.artistName}</p>
									<p className={styles.album_details}>
										<span>{album.primaryGenreName}</span>&emsp;•&emsp;
										<span>{album.releaseDate.slice(0, 4)}</span>
									</p>
									<p className={styles.album_find_out_more}>
										<a href={album.collectionViewUrl} target="blank">
											Find out more
										</a>
									</p>
								</div>
							)
						})}
					</div>
				</section>
			</div>
		</main>
	)
}
