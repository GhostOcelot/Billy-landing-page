import React, { useContext } from "react"
import { Context } from "../index"
import styles from "./Slider.module.css"

export default function Header() {
	const [albums, setAlbums] = useContext(Context)

	return (
		<div className={styles.carousel_container}>
			{albums.map(album => {
				return (
					<div className={styles.carousel_item} key={album.collectionId}>
						<div className={styles.album_thumbnail}>
							<img
								src={`${album.artworkUrl100.slice(0, -13)}1000x1000bb.jpg`}
								alt="album cover picture"
							/>
						</div>
						<p className={styles.album_title}>{album.collectionName}</p>
						<p className={styles.album_artist}>{album.artistName}</p>
						<p className={styles.album_details}>
							<span>{album.primaryGenreName}</span>
							<span>&emsp;•&emsp;</span>
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
	)
}
