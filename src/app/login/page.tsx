export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8">
    <h2 className="text-2xl font-bold text-center text-gray-800  ">Bienvenido</h2>
    <h3 className="text-lg  text-center text-gray-500 mb-6">Inicie Sesion</h3>
    
    <form action="/login" method="POST" className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input type="email" name="email" id="email" required
               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
        <input type="password" name="password" id="password" required
               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-200">
        Entrar
      </button>
    </form>
    <p className="mt-4 text-center text-sm text-gray-500">¿No tienes cuenta? <a href="#" className="text-blue-600 hover:underline">Regístrate</a></p>
  </div>
</div>
    // <div className="h-screen w-screen flex items-center justify-center ">
    //   <div className="bg-blue-500 h-2/4 w-1/4">01</div>
    // {/* <div className="grid grid-cols-1 place-content-center bg-blue-500 h-2/4 mt-40">

    // </div> */}
    // </div>
  );
}
