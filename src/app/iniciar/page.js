import Link from 'next/link'

export default function Iniciar() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center font-montserrat bg-black">
      <video
        src="/assets/purple-bg.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <div className="relative z-10">
        <Link href="/perguntas" legacyBehavior>
          <a>
            <button className="text-white border-2 w-72 h-28 text-center text-3xl border-white hover:border-purple-dark hover:text-purple-dark px-6 py-3 rounded-3xl font-montserrat-alternates hover:bg-white uppercase">
              Iniciar
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}
