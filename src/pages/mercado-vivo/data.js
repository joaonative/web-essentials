export const products = [
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
  {
    id: 7,
    name: "Creme de Coco e Leite de Amêndoas",
    price: "10.49",
    discount: "20",
    imageUrl:
      "https://img.thrivemarket.com/custom_assets/2f1fbdd87ca73d8c44da82bd694c9d60.jpg?w=322&jpg_quality=90",
  },
  {
    id: 8,
    name: "Salmão Selvagem em Lata",
    price: "4.99",
    discount: "41",
    imageUrl:
      "https://img.thrivemarket.com/custom_assets/dfce8b187b1694aab46e016430a6a342.jpg?w=322&jpg_quality=90",
  },
];

export const maxDiscount = products.reduce((max, product) => {
  const discountValue = parseInt(product.discount, 10);
  return discountValue > max ? discountValue : max;
}, 0);

export const advantages = [
  "Milhares de produtos orgânicos e sustentáveis de alta qualidade.",
  "Itens especiais para mais de 90 estilos de vida e necessidades alimentares.",
  "Sem sabores artificiais ou corantes sintéticos.",
  "Padrões de qualidade rigorosos com centenas de ingredientes restritos.",
  "Fomos o primeiro varejista online a aceitar o SNAP EBT.",
];

export const saveTips = [
  {
    title: "Promessa de preços baixos",
    description:
      "Promessa de preços baixos Nós igualamos o preço, garantido pelo nosso Programa de Igualação de Preços.",
    color: "#BCE1D7",
    imgUrl: "/mercado-vivo/abt1.webp",
  },
  {
    title: "BRINDES GRATUITOS em pedidos qualificados",
    description:
      "Aproveite produtos em tamanho real de algumas das suas marcas favoritas, por nossa conta.",
    color: "#A9E7F6",
    imgUrl: "/mercado-vivo/abt2.webp",
  },
  {
    title: "Economize 5-10% adicionais em milhares de itens com o Autoship",
    description:
      "Altere produtos, pause ou adie entregas recorrentes, ou faça pedidos únicos a qualquer momento.",
    color: "#D9DFB6",
    imgUrl: "/mercado-vivo/abt3.webp",
  },
  {
    title: "Ofertas exclusivas, cupons e Vivo Cash",
    description:
      "Descubra promoções semanais especiais e ganhe crédito na loja enquanto compra.",
    color: "#FAC9A5",
    imgUrl: "/mercado-vivo/abt4.webp",
  },
  {
    title: "Feito por Mercado Vivo",
    description:
      "Compre nossa linha acessível de mais de 600 itens essenciais para a despensa e proteínas de origem sustentável.",
    color: "#E2D2DF",
    imgUrl: "/mercado-vivo/abt5.webp",
  },
  {
    title: "Experimente sem riscos",
    description:
      "Recupere o valor da sua anuidade em economia dentro de um ano, ou nós creditamos a diferença em Vivo Cash na renovação.",
    color: "#C7F3E2",
    imgUrl: "/mercado-vivo/abt6.webp",
  },
];
