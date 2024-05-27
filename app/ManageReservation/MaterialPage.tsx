import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface Reservation {
  productId: string;
  reservationNumber: string;
  date: string;
}
const reservations: Reservation[] = [
    {
        productId: 'x-456321',
        reservationNumber: '245687',
        date: '26/5/2024'
    },
  {
    productId: 'X-456321',
    reservationNumber: '245687',
    date: '27/03/24',
  },
  {
    productId: 'X-456321',
    reservationNumber: '245687',
    date: '27/03/24',
  },
  {
    productId: 'X-456321',
    reservationNumber: '245687',
    date: '27/03/24',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reservations</title>
      </Head>
      <header className={styles.header}>
        <h1>Reservations</h1>
        <input type="text" placeholder="Search..." className={styles.searchBar} />
      </header>
      <main className={styles.main}>
        {reservations.map((reservation, index) => (
          <div key={index} className={styles.card}>
            <div>
              <strong>Product ID:</strong> {reservation.productId}
            </div>
            <div>
              <strong>Reservation Number:</strong> {reservation.reservationNumber}
            </div>
            <div>
              <strong>Date:</strong> {reservation.date}
            </div>
            <button className={styles.button}>More information</button>
          </div>
        ))}
      </main>
    </div>
  );
}
// pages/index.tsx
import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface Reservation {
  productId: string;
  reservationNumber: string;
  date: string;
}

const reservations: Reservation[] = [
  {
    productId: 'X-456321',
    reservationNumber: '245687',
    date: '27/03/24',
  },
  {
    productId: 'X-456321',
    reservationNumber: '245687',
    date: '27/03/24',
  },
  {
    productId: 'X-456321',
    reservationNumber: '245687',
    date: '27/03/24',
  },
  {
    productId: 'X-456321',
    reservationNumber: '245687',
    date: '27/03/24',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reservations</title>
      </Head>
      <header className={styles.header}>
        <h1>Reservations</h1>
        <input type="text" placeholder="Search..." className={styles.searchBar} />
      </header>
      <main className={styles.main}>
        {reservations.map((reservation, index) => (
          <div key={index} className={styles.card}>
            <div>
              <strong>Product ID:</strong> {reservation.productId}
            </div>
            <div>
              <strong>Reservation Number:</strong> {reservation.reservationNumber}
            </div>
            <div>
              <strong>Date:</strong> {reservation.date}
            </div>
            <button className={styles.button}>More information</button>
          </div>
        ))}
      </main>
    </div>
  );
}
