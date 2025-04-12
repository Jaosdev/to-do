export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800  ">
          Registrate
        </h2>
        <h3 className="text-lg  text-center text-gray-500 mb-6">
          Inicie Sesion
        </h3>

        <form action="/login" method="POST" className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          ¿Ya tienes cuenta?{" "}
          <a href="/access" className="text-blue-600 hover:underline">
            Inicia Sesion
          </a>
        </p>
      </div>
    </div>
  );
}
