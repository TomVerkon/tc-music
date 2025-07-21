import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main>
        <h1>TC Music App!</h1>
        <p>Home page.</p>
        <Image
          src='/TroublesomeCreAkLogoFinal.svg'
          alt='TroublesomeCreAk Logo'
          width={200}
          height={200}
        />
      </main>
      <footer>
        <a href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
}
