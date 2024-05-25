import Link from 'next/link'

export default function Iniciar() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center bg-purple-bg font-montserrat">
      <Link href="/perguntas" legacyBehavior>
        <button className="text-white border-2 w-72 h-28 text-center text-3xl border-white hover:border-purple-dark hover:text-purple-dark px-6 py-3 rounded-3xl font-montserrat-alternates hover:bg-white uppercase">
          Iniciar
        </button>
      </Link>
    </div>
  )
}
