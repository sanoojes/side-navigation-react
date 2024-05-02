import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { motion } from "framer-motion";
import Backdrop from "./components/Backdrop";
import Dashboard from "./components/Dashboard";

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
        <Dashboard />
      </main>
    </>
  );
}

export default App;

