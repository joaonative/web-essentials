import Section from "../components/Section";

const ProductOptions = () => {
  return (
    <Section id="productOptions" title={"Diferentes Opções."} start>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 select-none">
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="flex justify-center bg-teal-300 rounded-full w-64 h-64">
            <img
              src="/tinto/red.png"
              alt="garrafa de vinho"
              className="h-64 object-cover"
            />
          </span>
          <b className="text-xl font-black font-noto">Vermelho</b>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="flex justify-center bg-yellow-300 rounded-full w-64 h-64">
            <img
              src="/tinto/white.png"
              alt="garrafa de vinho"
              className="h-64 object-cover"
            />
          </span>
          <b className="text-xl font-black font-noto">Branco</b>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="flex justify-center bg-green-800 rounded-full w-64 h-64">
            <img
              src="/tinto/sparkling.png"
              alt="garrafa de vinho"
              className="h-64 object-cover"
            />
          </span>
          <b className="text-xl font-black font-noto">Espumante</b>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="flex justify-center bg-pink-300 rounded-full w-64 h-64">
            <img
              src="/tinto/rose.png"
              alt="garrafa de vinho"
              className="h-64 object-cover"
            />
          </span>
          <b className="text-xl font-black font-noto">Rosé</b>
        </div>
      </div>
    </Section>
  );
};

export default ProductOptions;
