import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Next TS Starter </h1>

        <div className='flex items-center'>
          <Link className='mr-2' href={'/about'}>
            About
          </Link>
          <Link href={'/team'}>Team</Link>
        </div>
      </div>
    </section>
  )
}
