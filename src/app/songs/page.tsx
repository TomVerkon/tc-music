'use client';
import SongsTable from '../components/songsTable';

export default function SongsPage() {
  return (
    <div>
      <main>
        <h1>TC Music App Songs</h1>
        <SongsTable></SongsTable>
      </main>
      <footer>
        <a href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
}
