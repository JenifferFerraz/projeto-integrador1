import Image from 'next/image'
import Link from 'next/link'

export default function Register() {
  return (
    <main className="min-h-screen flex flex-col">
      <div
        className="min-h-screen flex flex-col bg-purple-700"
        style={{
          backgroundImage: 'url("/assets/bg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <header className="flex items-center justify-between px-6 py-4">
          <img className="w-32 h-20" src="/assets/logo.svg" alt="logo" />
          <Link
            href="/login"
            className="text-white border-2 border-white hover:border-purple-dark hover:bg-white  hover:text-purple-dark px-4 py-2 rounded-xl"
          >
            FAÇA LOGIN
          </Link>
        </header>
        <section className="flex-grow flex items-center">
          <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto w-full sm:max-w-md">
            <div className="w-full bg-white rounded-xl shadow">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight text-purple-dark text-center tracking-tight md:text-2xl">
                  REGISTRE-SE
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-purple-dark"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-base border border-purple-dark text-gray-900 sm:text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Seu Nome"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-purple-dark"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-base border border-purple-dark text-gray-900 sm:text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-purple-dark"
                    >
                      Senha
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-base border border-purple-dark text-gray-900 sm:text-sm rounded-xl focus:ring-purple-dark focus:border-purple-dark block w-full p-2.5"
                      required=""
                    />
                  </div>
                  <div className="w-full flex flex-row justify-center">
                    <button
                      type="submit"
                      className="w-48 text-white bg-purple-dark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm py-2.5 text-center dark:bg-primary-600  hover:bg-purple-light"
                    >
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
