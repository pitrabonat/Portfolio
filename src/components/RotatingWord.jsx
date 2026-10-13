import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingWord({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((v) => (v + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "0.5em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.5em", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block italic text-accent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}