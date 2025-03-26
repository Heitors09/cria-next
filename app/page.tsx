import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { CodeComparison } from "@/components/magicui/code-comparison";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-[646px]">

      <AnimatedGridPattern className="-z-10 opacity-30"/>
    <main className=" w-1/2 flex flex-col space-y-8  justify-center">
      <h1 className="text-7xl w-[600px] leading-[70px] font-extrabold text-left bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">Transformando sua visão em <span className="bg-gradient-to-b from-sky-400 to-blue-700 text-transparent bg-clip-text relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-transparent after:via-white/10 after:to-transparent after:blur-sm">realidade digital</span>.</h1>
      <p className="text-gray-300 text-xl ">
        Somos especialistas em desenvolvimento, criando soluções personalizadas para a sua presença digital.
      </p>
       <Button className="p-6 max-w-[280px] size-lg  font-bold bg-primary text-primary-foreground shadow-lg">
         Conheça Nossos Serviços <ArrowRightIcon className="size-4" />
      </Button>
    </main>
    <aside className="w-1/2 mx-20 flex justify-center items-center">
      <CodeComparison  />
    </aside>
    </div>
  );
}
