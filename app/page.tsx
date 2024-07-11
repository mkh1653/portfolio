import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className='min-h-screen flex-col items-center justify-between p-12'>
        <header className='flex justify-around items-center'>
          <div className="w-1/2">
            <h1>
              <span className='text-4xl'>Hi i'm</span>
              <span className='text-cyan-300 ml-2 text-8xl'>Mahdi</span>
            </h1>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto minus expedita, corrupti veritatis incidunt dolorem
              eius pariatur nihil ipsum maiores minima deserunt, nulla
              voluptates eum qui. Ipsa ad rerum unde.
            </p>
          </div>

          <Image
            className='w-1/4 border border-cyan-200 rounded-full p-3'
            width={50}
            height={50}
            src='/image/coding-3-24.svg'
            alt='coding image svg'
          />
        </header>
      </main>
    </>
  );
}
