import { Star } from "lucide-react";
import Section from "../components/Section";
import { wines } from "../data";

const Products = () => {
  return (
    <Section id="products" title={"Os Membros Amam."} start>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {wines.map((w) => (
          <div key={w.id}>
            <img
              src={w.imageUrl}
              alt={`imagem do produto ${w.name}`}
              className=""
            />
            <h3 className="font-black">{w.name}</h3>
            <h4>{w.locale}</h4>
            <div className="flex items-center justify-between">
              <span className="flex gap-2">
                <p>R${w.price}</p>
                <del>{w.oldPrice}</del>
              </span>
              <div className="flex">
                {Array(w.stars)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={20} fill="black" />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Products;
