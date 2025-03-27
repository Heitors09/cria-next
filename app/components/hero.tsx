import { ChevronDown } from "lucide-react";

import { CodeComparison } from "@/components/magicui/code-comparison";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export function Hero() {
  return (
    <div className="flex max-xl:flex-col  h-[646px] 2xl:px-72 xl:px-20 xl:pt-24 max-xl:py-10 max-xl:items-center">

    <AnimatedGridPattern className="-z-10 opacity-30"/>
  <main className="xl:w-1/2 flex flex-col space-y-6 justify-center">
    <h1 className="2xl:text-7xl xl:text-6xl md:text-5xl text-4xl 2xl:w-[600px] xl:w-[500px] max-xl:w-full px-4 2xl:leading-[70px] xl:leading-[65px] max-sm:leading-[40px] font-extrabold text-center xl:text-left bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">Transformando sua visão em 
       <strong className="bg-gradient-to-b from-sky-400 via-sky-500 to-blue-700 text-transparent bg-clip-text"> Realidade digital</strong></h1>
    <p className="text-gray-300 w-full px-4 2xl:text-xl xl:text-lg md:text-xl text-base text-center xl:text-left">
      Somos especialistas em desenvolvimento, criando soluções personalizadas para a sua presença digital.
    </p>
    <div className="flex gap-4 px-4 max-sm:flex-col max-sm:w-full">
      <Button className="p-6 max-xl:w-full 2xl:max-w-[280px] xl:max-w-[240px] md:text-xl text-xl size-xl font-bold bg-transparent hover:bg-transparent border border-sky-400">
         <span className="bg-gradient-to-b from-sky-400 via-sky-500 to-blue-700 flex items-center gap-2  bg-clip-text text-transparent">
           Sobre nós <ChevronDown className="size-6 text-sky-400" />
         </span>
      </Button>
      <Button className="p-6 2xl:max-w-[300px] xl:max-w-[260px] flex items-center size-xl bg-primary text-primary-foreground shadow-xl">
        Conheça Nossos Serviços <ArrowRightIcon className="size-4" />
      </Button>
    </div>
  </main>
  <aside className="xl:w-1/2 max-xl:py-5 2xl:mx-20 xl:mx-10 w-full px-4 flex justify-center items-center">
    <CodeComparison  />
  </aside>
  </div>  
  )
}