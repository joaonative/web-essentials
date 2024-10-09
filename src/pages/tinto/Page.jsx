import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Discover from "./sections/Discover";
import Hero from "./sections/Hero";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-slate-200 text-black">
      <Header />
      <main className="flex-grow flex flex-col gap-6">
        <Hero />
        <Partners />
        <Discover />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
