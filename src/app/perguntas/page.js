import Link from 'next/link'

export default function Perguntas() {
  return (
    <div className="flex flex-col h-screen bg-purple-bg p-10">
      {/* Parte superior da página */}
      <div className="flex justify-start items-start h-2/4">
        <div className="relative w-64 md:w-80 h-64 md:h-80">
          <img src="/assets/Group 1.svg" alt="" className="w-full h-full" />
          <div className="absolute top-0 left-full w-[300%] h-32 bg-gray-base rounded-2xl p-4 shadow-lg mt-4 ml-4">
            <p className="text-purple-dark text-lg font-montserrat-alternates	text-medium">
              Olá, eu sou Atena! Para te ajudar a escolher o banco de dados que
              melhor atende às suas necessidades, vou fazer algumas perguntas.
              Isso nos permitirá identificar as opções mais adequadas ao seu
              projeto.
            </p>
          </div>
        </div>
      </div>

      {/* Parte inferior da página */}
      <div className="flex justify-center items-center h-2/4">
        <div>
          {/* Centralize o botão na tela */}
          <Link href="/respostas">
            <button className="px-6 py-3 bg-gray-base text-purple-dark rounded-2xl shadow-md w-80 h-16 hover:bg-purple-600 transition duration-300 ease-in-out font-montserrat-alternates">
              CONTINUAR{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
