import React, { useState } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

export const Context = React.createContext()

export async function getStaticProps(context) {
	const res = await fetch(
		`https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7`
	)
	const data = await res.json()

	return {
		props: { data },
	}
}

export default function Home(props) {
	const { results } = props.data
	const [albums, setAlbums] = useState(results)

	return (
		<>
			<div className={styles.container}>
				<Head>
					<title>Muse.ic</title>
					<link rel="icon" href="/favicon.png" />
				</Head>
				<Context.Provider value={[albums, setAlbums]}>
					<Header />
					<Main />
					<Footer />
				</Context.Provider>
			</div>
		</>
	)
}
