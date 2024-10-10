import { Star } from "lucide-react";
import Section from "../components/Section";
import { reviews } from "../data";

const Reviews = () => {
  return (
    <Section id="reviews" title={"Experiências do Clube."} start>
      <div className="flex flex-col md:flex-row items-center gap-20 md:justify-between pt-12">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="flex flex-col gap-1 p-4 rounded-2xl"
            style={{ backgroundColor: r.color }}
          >
            <img
              src={r.imageUrl}
              alt={`imagem de perfil de ${r.name}`}
              loading="lazy"
              className="-mt-16 h-20 w-20 object-cover rounded-full"
            />
            <div className="flex gap-2">
              {Array(r.stars)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={20} fill="black" />
                ))}
            </div>
            <b className="font-noto font-black">{r.name}</b>
            <p className="text-sm w-80">{r.message}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Reviews;
