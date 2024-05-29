import Link from 'next/link'

export default function Perguntas() {
  return (
    <div className="flex flex-col h-screen bg-purple-bg p-10">
      <div className="flex justify-start items-start h-2/4">
        <div className="relative w-64 md:w-80 h-64 md:h-80">
          <img
            src="/assets/Group 1.svg"
            alt=""
            className="w-full h-full animate-bounce"
          />
          <div className="absolute top-10 left-full w-[200%] h-32 bg-gray-base rounded-2xl p-4 shadow-lg mt-12 ml-4">
            <p className="text-purple-dark text-2xl font-montserrat-alternates	text-medium">
              Que tipo de operações são mais frequentes?
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center  ">
        <div className="flex flex-col justify-center gap-y-4 items-center w-full md:w-1/2">
          <Link href="/consultas">
            <button className="px-6 py-3 bg-gray-base text-purple-dark rounded-2xl shadow-md w-96 h-20 hover:bg-purple-light hover:text-white transition duration-300 ease-in-out font-montserrat-alternates hover:border-white border text-xl mb-4">
              Consultas simples e regulares
            </button>
          </Link>
          <Link href="/perfomance">
            <button className="px-6 py-3 bg-gray-base text-purple-dark rounded-2xl shadow-md w-96 h-20 hover:bg-purple-light hover:text-white transition duration-300 ease-in-out font-montserrat-alternates hover:border-white border text-xl">
              Necessidade de performance em tempo real
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-y-4">
          <Link href="/disponibilidade">
            <button className="px-6 py-3 bg-gray-base text-purple-dark rounded-2xl shadow-md w-96 h-20 hover:bg-purple-light hover:text-white transition duration-300 ease-in-out font-montserrat-alternates hover:border-white border text-xl mb-4">
              Alta disponibilidade e tolerância a falhas
            </button>
          </Link>
          <Link href="/volumes">
            <button className="px-6 py-3 bg-gray-base text-purple-dark rounded-2xl shadow-md w-96 h-20 hover:bg-purple-light hover:text-white transition duration-300 ease-in-out font-montserrat-alternates hover:border-white border text-xl">
              Alta escalabilidade e grandes volumes de dados
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
