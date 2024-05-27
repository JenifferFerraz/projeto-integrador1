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
          <div className="absolute top-0 left-full w-[250%] h-32 bg-gray-base rounded-2xl p-4 shadow-lg mt-4 ml-4">
            <p className="text-purple-dark text-xl font-montserrat-alternates	text-medium">
              É bem simples! A cada pergunta, você verá uma lista de opções.
              Basta selecionar a que melhor atende às suas necessidades.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-2/4">
        <div>
          <Link href="/tiposdados">
            <button className="px-6 py-3 bg-gray-base text-purple-dark rounded-2xl shadow-md w-80 h-16 hover:bg-purple-light  hover:text-white transition duration-300 ease-in-out font-montserrat-alternates hover:border-white border text-xl">
              VAMOS COMEÇAR!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
