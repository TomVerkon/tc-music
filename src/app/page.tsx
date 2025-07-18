import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-12'>
      <main className='flex w-full flex-1 flex-col items-center justify-center text center'>
        <h1 className='text-4xl font-bold'>TC Music App!</h1>
        <p className='mt-3 text-2xl'>Home page.</p>
        <Image
          src='/TroublesomeCreAkLogoFinal.jpg'
          alt='TroublesomeCreAk Logo'
          width={200}
          height={200}
          className='mt-5'
        />
      </main>
      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          href='https://nextjs.org'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-2 text-lg'>
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
}
