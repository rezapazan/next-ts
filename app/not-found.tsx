import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <div>
        <h2>Not Found</h2>
        <p>Could not found requested resource.</p>
        <button>
          <Link href={'/'}>Return Home</Link>
        </button>
      </div>
    </section>
  )
}
