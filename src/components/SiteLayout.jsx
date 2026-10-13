import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export default function SiteLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 55% at 18% 8%, hsl(var(--glow-1) / 0.22), transparent 70%), radial-gradient(50% 50% at 84% 22%, hsl(var(--glow-2) / 0.16), transparent 72%), radial-gradient(70% 60% at 50% 105%, hsl(var(--glow-1) / 0.12), transparent 75%)",
        }}
      />
      <ParticleField pulse={location.pathname} />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <motion.div
          key={location.pathname}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="h-px origin-left bg-gradient-to-r from-accent via-accent2 to-transparent"
        />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}