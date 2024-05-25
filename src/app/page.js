import Link from 'next/link'

export default function Home() {
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
            href="/register"
            passHref
            className="text-white border-2 border-white hover:border-purple-dark hover:text-purple-dark px-4 py-2 rounded-xl"
          >
            CADASTRE-SE
          </Link>
        </header>
        <section className="flex-grow flex items-center">
          <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto w-full sm:max-w-md">
            <div className="w-full bg-white rounded-xl shadow">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight text-purple-dark text-center tracking-tight md:text-2xl">
                  FAÇA SEU LOGIN
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-purple-dark rounded-xl bg-gray-base focus:ring-3 focus:ring-purple-dark"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-purple-dark">
                          Lembrar senha
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-purple-light hover:underline"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>
                  <div className="w-full flex flex-row justify-center">
                    <button
                      type="submit"
                      className="w-48 text-white bg-purple-dark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm py-2.5 text-center dark:bg-primary-600  hover:bg-purple-light"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="my-4 mx-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-100 text-purple-dark">
                      Ou continue com
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="flex items-center justify-center px-6 py-3 border border-purple-dark rounded-xl shadow-sm text-sm font-medium text-purple-dark bg-white hover:bg-gray-50"
                    >
                      <img
                        className="h-5 w-5"
                        src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="flex items-center justify-center px-6 py-3 border border-purple-dark rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        className="h-5 w-5"
                        src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="flex items-center justify-center px-6 py-3 border border-purple-dark rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        className="h-6 w-6"
                        src="https://www.svgrepo.com/show/506498/google.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
