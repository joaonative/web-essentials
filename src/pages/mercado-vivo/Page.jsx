import { Link } from "react-router-dom";
import Section from "./components/Section";

const Page = () => {
  const products = [
    {
      id: 1,
      name: "Guloseimas de Fruta Orgânicas Bunny",
      price: "4.19",
      discount: "30",
      imageUrl:
        "https://img.thrivemarket.com/custom_assets/2807a31006b30f760c53e166d889c4b7.jpg?w=322&jpg_quality=90",
    },
    {
      id: 2,
      name: "Sopa Orgânica de Lentilhas",
      price: "2.99",
      discount: "40",
      imageUrl:
        "https://img.thrivemarket.com/custom_assets/630de056127be7daccf9c5f666bf3f8e.jpg?w=322&jpg_quality=90",
    },
    {
      id: 3,
      name: "Molho de Macarrão Marinara",
      price: "7.49",
      discount: "25",
      imageUrl:
        "https://img.thrivemarket.com/custom_assets/09a5ac338b92b7c2117ff5dc23275e58.jpg?w=322&jpg_quality=90",
    },
    {
      id: 4,
      name: "Cereal Low Carb de Chocolate Amargo",
      price: "7.99",
      discount: "10",
      imageUrl:
        "https://img.thrivemarket.com/custom_assets/5b963277ac66db38ffcc407eb2613ff6.jpg?w=322&jpg_quality=90",
    },
    {
      id: 5,
      name: "Muesli Estilo Tradicional",
      price: "6.99",
      discount: "30",
      imageUrl:
        "https://img.thrivemarket.com/custom_assets/22aa0ba29299c8f8ce5f814d22c17781.jpg?w=322&jpg_quality=90",
    },
    {
      id: 6,
      name: "Azeite de Oliva Extra Virgem",
      price: "10.49",
      discount: "20",
      imageUrl:
        "https://img.thrivemarket.com/custom_assets/5cb1a819858b6ca216bf3006862fb572.jpg?w=322&jpg_quality=90",
    },
  ];

  const maxDiscount = products.reduce((max, product) => {
    const discountValue = parseInt(product.discount, 10);
    return discountValue > max ? discountValue : max;
  }, 0);

  return (
    <div className="flex flex-col font-work text-[#333333] bg-[#FAF3EF]">
      <span className="w-full py-3 text-base text-center bg-[#D1FCE2]">
        Oferta especial: Ganhe <b>R$60 GRÁTIS</b> hoje!
      </span>
      <header className="flex items-center px-8 py-4 gap-6">
        <Link to={"/mercado-vivo"}>
          <img
            src="/mercado-vivo/logo.png"
            alt="mercado-vivo logo"
            width={128}
            className="bg-cover"
          />
        </Link>
        <nav className="flex items-center gap-6 text-lg">
          <Link to={"/mercado-vivo"}>Como Funciona</Link>
          <Link to={"/mercado-vivo"}>Garantia de Economia</Link>
          <Link to={"/mercado-vivo"}>Promoção Ativa</Link>
        </nav>
      </header>
      <main>
        <Section
          title={`Economize até ${maxDiscount}% em produtos orgânicos e não transgênicos!`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-between">
            {products.map((p) => (
              <div
                key={p.id}
                className="w-max flex flex-col p-4 gap-2 rounded-xl items-center bg-white"
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
                  <h3 className="w-40">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Page;
