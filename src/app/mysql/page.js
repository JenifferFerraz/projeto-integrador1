import Link from 'next/link'

export default function Perguntas() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-bg p-8">
      <div className="flex flex-col md:flex-row justify-center items-center flex-grow">
        <div className="max-w-md lg:max-w-xl xl:max-w-2xl w-64 lg:w-64 xl:w-2/5 mb-8">
          <img
            src="/assets/Group 1.svg"
            alt=""
            className="w-64 h-52 animate-bounce"
          />
        </div>
        <div className="bg-gray-base rounded-2xl p-6 shadow-lg ">
          <p className="text-purple-dark text-xl md:text-2xl font-montserrat-alternates text-medium">
            Com base nas suas respostas, encontrei a tecnologia ideal para você!
            Espero que essa recomendação ajude a impulsionar seu projeto. Se
            precisar de mais alguma coisa, estarei aqui para ajudar!
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-grow">
        <div className="bg-gray-base rounded-2xl   shadow-neon flex justify-center h-2/4 items-center p-10 w-full md:w-3/4 lg:w-1/2 xl:w-2/5">
          <h1 className="text-purple-dark font-montserrat-alternates font-bold text-7xl">
            MySQL
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 space-y-11">
        <Link href="/tiposdados">
          <button className="w-full md:w-96 h-20 px-6 py-3 bg-gray-base text-purple-dark rounded-2xl shadow-md hover:bg-purple-light hover:text-white transition duration-300 ease-in-out font-montserrat-alternates hover:border-white border text-2xl">
            Responder novamente
          </button>
        </Link>
        <Link href="/iniciar">
          <button className="w-full md:w-96 h-20 px-6 py-3 bg-gray-base text-purple-dark rounded-2xl shadow-md hover:bg-purple-light hover:text-white transition duration-300 ease-in-out font-montserrat-alternates hover:border-white border text-2xl">
            Voltar ao início
          </button>
        </Link>
      </div>
    </div>
  )
}
