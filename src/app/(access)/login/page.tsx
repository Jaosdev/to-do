import Image from "next/image";
import loginImage from "../../../../public/media/img/Imagen1.jpg";

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="flex w-2xl h-screen flex-none text-black">
        <div className="flex items-center justify-center w-full h-full text-center">
          <div className="w-full max-w-sm bg-violet-50/100 backdrop-blur-sm rounded-2xl shadow-md px-10 pb-12 pt-12">
            <h2 className="text-2xl font-bold text-center text-indigo-800  ">
              Registrate
            </h2>
            <h3 className="text-lg  text-center text-gray-400 mb-10">
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
                className="w-full py-2 px-4 bg-indigo-800 text-white rounded-xl hover:bg-indigo-700 transition duration-200"
              >
                Entrar
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-500">
              ¿Ya tienes cuenta?{" "}
              <a href="/access" className="text-indigo-700 hover:underline">
                Inicia Sesion
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 p-6">
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
          <Image className="w-full h-full" alt="" src={loginImage}></Image>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex">

  <div className="flex w-lg h-screen bg-linear-to-bl from-red-950 to-yellow-600  flex-none text-black">

    <div className=" items-center justify-center ">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam praesentium eaque vitae laboriosam deleniti cupiditate odio sunt, natus facilis aliquam voluptatum iusto iste minima esse nostrum nobis deserunt maiores sapiente!
    </div>
  </div>
<div className="w-full flex-1 text-black">02</div>
</div> */
}

{
  /* <div className=" "> */
}
{
  /* <div className="flex-1 text-black border-4">01</div>
<div className=" flex-1 text-black border-4">02</div> */
}
{
  /* <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8">
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
</div> */
}
// </div>
