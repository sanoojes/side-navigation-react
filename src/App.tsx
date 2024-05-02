import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { motion } from "framer-motion";
import Backdrop from "./components/Backdrop";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [backdropController, setBackdropController] = useState<boolean>(false);

  const clickOut = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    if (isOpen || selectedProject) {
      setBackdropController(true);
    } else {
      setBackdropController(false);
    }
  }, [isOpen, selectedProject]);

  return (
    <>
      <Backdrop onClick={clickOut} controller={backdropController} />
      <main className="h-screen w-full flex flex-row relative">
        <Navigation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <motion.section className={`flex flex-col gap-5 ml-20 p-10 w-full z-0`}>
          <h1 className="text-4xl text-neutral-200">Dashboard</h1>
          <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg h-60"></div>
          <div className="flex gap-5">
            <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg h-60 w-full"></div>
            <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg h-60 w-full"></div>
          </div>
        </motion.section>
      </main>
    </>
  );
}

export default App;

