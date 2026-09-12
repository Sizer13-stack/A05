import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechGrid from "./components/TechGrid.jsx";
import YourStack from "./components/YourStack.jsx";
import Footer from "./components/Footer.jsx";
import { useTechStack } from "./hooks/useTechStack.js";

export default function App() {
  const {
    technologies,
    isLoading,
    stack,
    isInStack,
    addToStack,
    removeFromStack,
    removeAll,
  } = useTechStack();

  const scrollToTechnologies = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onExploreClick={scrollToTechnologies} />

      <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
          <TechGrid
            technologies={technologies}
            isLoading={isLoading}
            isInStack={isInStack}
            onAdd={addToStack}
          />
          <YourStack
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      </main>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        newestOnTop
        theme="dark"
      />
    </div>
  );
}
