import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../Logo";

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
  <div className=" w-full h-20 items-center flex justify-between px-78">
      <Logo />
      <div className="flex text-gray-300  font-medium gap-7">
         {menuItems.map((item) => (
            <Link key={item.title} href={item.href}>{item.title}</Link>
         ))}
      </div>
      <Button>
        Fale Conosco
      </Button>
    </div>
  );
}
