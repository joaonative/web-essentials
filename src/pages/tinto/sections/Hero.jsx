const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-4 px-4 sm:px-8 md:px-12">
      <div className="flex flex-col gap-4">
        <h1 className="font-noto font-black text-5xl">
          <span className="text-violet-500">Tinto!</span> <br />O Clube #1 de
          Vinhos <br /> na Internet.
        </h1>
        <p className="text-lg max-w-prose">
          Seja assinante do nosso clube e receba, diretamente em sua casa,
          rótulos selecionados de vinícolas renomadas e produtores exclusivos.
        </p>
      </div>
      <img src="/tinto/hero.png" alt="duas taças de vinho brindando" />
    </section>
  );
};

export default Hero;
