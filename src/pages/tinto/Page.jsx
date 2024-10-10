import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Discover from "./sections/Discover";
import Hero from "./sections/Hero";
import ProductOptions from "./sections/ProductOptions";
import Products from "./sections/Products";
import Reviews from "./sections/Reviews";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col font-work bg-white text-black">
      <Header />
      <main className="flex-grow flex flex-col gap-24 py-8 sm:py-8 md:py-16 lg:py-20 xl:py-24">
        <Hero />
        <ProductOptions />
        <Products />
        <Discover />
        <Partners />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
