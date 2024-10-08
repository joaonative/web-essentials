import { Link } from "react-router-dom";
import Section from "./components/Section";
import Button from "./components/Button";
import Title from "./components/Title";
import { ChevronDown, ChevronUp, CircleCheck, Menu, X } from "lucide-react";
import { advantages, faqs, maxDiscount, products, saveTips } from "./data";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="min-h-screen flex flex-col font-work text-[#333333] bg-[#FAF3EF]">
      <div className="sticky z-30 flex flex-col top-0">
        <span className="py-3 text-base text-center bg-[#D1FCE2]">
          Oferta especial: Ganhe <b>R$60 GRÁTIS</b> hoje!
        </span>
        <header className="flex flex-col md:flex-row md:items-center px-4 md:px-8 xl:px-12 py-4 gap-4 md:gap-6 xl:gap-12 bg-[#FAF3EF]">
          <div className="flex items-center justify-between">
            <Link to={"/mercado-vivo"}>
              <img
                src="/mercado-vivo/logo.png"
                alt="mercado-vivo logo"
                width={96}
                className="bg-cover"
              />
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:items-center gap-4 md:gap-6 xl:gap-12 text-lg`}
          >
            <Link to={"/mercado-vivo"}>Nossos Produtos</Link>
            <Link to={"/mercado-vivo"}>Economia Consciente</Link>
            <Link to={"/mercado-vivo"}>Quem Somos</Link>
          </nav>
        </header>
      </div>
      <main className="flex flex-col gap-6">
        <div className="relative flex items-center justify-center h-[512px] overflow-hidden">
          <div className="relative z-20 flex flex-col gap-4 xl:gap-12 items-center">
            <h1 className="font-dm text-4xl xl:text-6xl text-center text-white">
              Cansado dos preços altos dos supermercados?
            </h1>
            <Button>Com Certeza!</Button>
          </div>
          <video
            autoPlay
            muted
            loop
            src="/mercado-vivo/hero.mp4"
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          ></video>
        </div>
        <Section
          title={`Economize até ${maxDiscount}% em produtos orgânicos & não transgênicos!`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 items-start justify-center">
            {products.map((p) => (
              <div
                key={p.id}
                className="w-full h-full flex flex-col p-4 gap-2 rounded-xl items-center bg-white"
              >
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  width={160}
                  className="w-40 h-50 bg-center object-cover select-none"
                />

                <div className="flex flex-col gap-1">
                  <span className="w-max px-1 rounded-sm text-sm font-bold bg-[#F7C85F]">
                    {p.discount}% OFF
                  </span>
                  <b className="text-lg">R${p.price}</b>
                  <h3>{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button>Economize Agora</Button>
          </div>
        </Section>

        <Section
          title="Economize em mais de 5.000 produtos saudáveis e orgânicos."
          solid
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {saveTips.map((st, i) => (
              <div
                key={i}
                style={{ backgroundColor: st.color }}
                className="w-full flex flex-col md:flex-row items-center p-2 md:p-0 gap-2 lg:justify-between rounded-xl"
              >
                <img
                  src={st.imgUrl}
                  alt="imagem de produtos Mercado Vivo"
                  className="w-32 h-32 md:w-52 md:h-52 object-cover rounded-tl-xl rounded-bl-xl"
                />
                <div className="flex flex-col gap-1 pr-4 text-lg">
                  <b className=" lg:max-w-xs xl:max-w-lg">{st.title}</b>
                  <p className="lg:max-w-xs xl:max-w-lg">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <div className="flex flex-col lg:flex-row gap-4 lg:justify-between">
            <Title start>
              Nós somos diferentes das <br className="hidden lg:block" /> lojas
              de supermercado & das <br className="hidden lg:block" />
              grandes redes de varejo.
            </Title>
            <ul className="flex flex-col items-start gap-2">
              {advantages.map((a, i) => (
                <li key={i} className="flex items-center gap-1">
                  <CircleCheck fill="#097671" stroke="#FFFFFF" size={32} />
                  <p className="w-full">{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
        <Section title={"Perguntas Frequentes"}>
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={i}
                onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                className="cursor-pointer flex flex-col gap-2 p-4 rounded-xl bg-white"
              >
                <div className="flex items-center justify-between">
                  <h4 className="md:text-lg">{faq.title}</h4>
                  <span className="w-max">
                    {isOpen ? (
                      <ChevronUp size={32} />
                    ) : (
                      <ChevronDown size={32} />
                    )}
                  </span>
                </div>
                {isOpen && <p>{faq.content}</p>}
              </div>
            );
          })}
        </Section>
      </main>
    </div>
  );
};

export default Page;
