import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../Logo";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

const menuItems = [
    {
        title: "Projetos",
        href: "/projetos"
    },
    {
        title: "Serviços",
        href: "/servicos"
    },
    {
        title: "Sobre Nós",
        href: "/sobre"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Orçamento",
        href: "/orcamento"
    },
]

export default function Navbar() {
  return (
    <div className="w-full h-20 items-center flex justify-between px-6 lg:px-20 xl:px-40 ">
      <Logo />
      <div className="flex text-gray-400 max-lg:hidden font-medium gap-7 ">
         {menuItems.map((item) => (
            <Link 
              className="hover:text-white transition-all duration-200 " 
              key={item.title} 
              href={item.href}
            >
              {item.title}
            </Link>
         ))}
      </div>
      <Button className="max-xl:hidden ">
        Fale Conosco
      </Button>
      <Drawer>
        <DrawerTrigger className="lg:hidden hover:bg-white/10 rounded-full p-2 transition-colors" asChild>
            <MenuIcon className="size-12 text-white"/> 
        </DrawerTrigger>
        <DrawerContent className="h-auto bg-gradient-to-b from-gray-900 to-gray-950">
            <DrawerHeader className="border-b border-gray-800/40 pb-4">
                <DrawerTitle className="text-lg font-extrabold text-white/90 flex items-center gap-2">
                    Navegue
                </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col px-6 py-8 text-gray-400 font-medium gap-8">
                {menuItems.map((item) => (
                    <Link 
                        className="hover:text-white transition-all hover:translate-x-1 transform duration-200 flex items-center gap-2 text-sm" 
                        key={item.title} 
                        href={item.href}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
