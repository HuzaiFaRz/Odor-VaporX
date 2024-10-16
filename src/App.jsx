import { motion } from "framer-motion";

import LocomotiveScroll from "locomotive-scroll";
// import { document } from "postcss";
import { useEffect, useRef } from "react";

const App = () => {
  useEffect(() => {
    new LocomotiveScroll({
      lenisOptions: {
        syncTouch: true,
        duration: 1,
        autoResize: true,
      },
    });
  }, []);
  return (
    <main>
      <div className="page-1 w-full h-[100vh] bg-slate-500 flex justify-center items-center">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          style={{ cursor: "grab" }}
          whileDrag={{ scale: 1.5 }}
          className="w-[400px] h-[500px] bg-zinc-700  text-teal-400 text-5xl flex justify-center items-center"
        >
          Huzaifa
        </motion.div>
      </div>
      <div className="page-2 w-full h-[100vh] bg-slate-400"></div>
      <div className="page-3 w-full h-[100vh] bg-slate-300"></div>
    </main>
  );
};
export default App;
