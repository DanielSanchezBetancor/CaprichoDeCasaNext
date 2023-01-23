import styles from './FAQCard.module.css';

function FAQCard({question, answer}) {
    return (
        <div className={styles.faq_card}>
            <h2>{question}</h2>
            <p>{answer}</p>
        </div>
    )
}

export default FAQCard;