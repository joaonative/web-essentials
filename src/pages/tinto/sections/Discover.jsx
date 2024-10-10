import { Calendar, ThumbsUp, XCircle } from "lucide-react";
import Section from "../components/Section";

const Discover = () => {
  return (
    <Section id="discover">
      <div className="flex flex-col md:flex-row gap-8 md:justify-between md:items-start">
        <div className="flex flex-col items-center gap-2">
          <ThumbsUp size={64} strokeWidth={2} />
          <p className="font-black font-noto text-2xl">
            Encontre a Garrafa Perfeita.
          </p>
          <p className="max-w-96 text-center">
            Classifique seus vinhos para que possamos aperfeiçoar seu paladar.
            Se você não gostar de uma garrafa, entre em contato conosco e a
            substituiremos por uma que você goste!
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Calendar size={64} strokeWidth={2} />
          <p className="font-black font-noto text-2xl">Do Seu Jeito.</p>
          <p className="max-w-96 text-center">
            Oferecemos assinaturas flexíveis para que você possa escolher suas
            próprias garrafas! Tinto, branco, rosé? A escolha é sua.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <XCircle size={64} strokeWidth={2} />
          <p className="font-black font-noto text-2xl">O Seu Tempo</p>
          <p className="max-w-96 text-center">
            Entendemos se você precisar de uma pausa. Pule um mês ou cancele a
            qualquer momento, sem perguntas.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Discover;
