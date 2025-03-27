import { Hero } from "./components/hero";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="flex flex-col gap-6 items-center mt-50 h-[1000px]">
         <p className="flex text-xl items-center bg-gradient-to-b from-sky-400 font-bold via-sky-500 to-blue-700 text-transparent bg-clip-text">Olá Mundo ,</p>
         <h2 className="text-5xl bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text font-bold">Somos a CriaNext</h2>
         <p className="text-2xl w-[800px]  text-center  text-gray-400">Estamos aqui para transformar suas ideias em realidade digital, oferecendo soluções personalizadas que atendem exatamente às suas necessidades. Conte conosco para impulsionar seu sucesso online e garantir que seu negócio tenha a visão digital que ele precisa.</p>
      </div>
    </>
  );
}
