import styles from "./Cards.module.css"

export default function Footer() {
	return (
		<section className={styles.cards_container}>
			<div className={styles.card}>
				<h1>30 days free trial</h1>
				<p>You are not convinced? Alright, we get it. We will give 30 days free trial then.</p>
				<button>Start 30 days trial</button>
			</div>
			<div className={styles.card}>
				<h1>Go on premium now</h1>
				<p>Ready to revolutionize your listening experience? Go on premium now!</p>
				<button>Continue with premium</button>
			</div>
		</section>
	)
}
