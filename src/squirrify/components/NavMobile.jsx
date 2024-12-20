import Hamburger from "hamburger-react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { menuOptions } from "../../helpers";
import { AnimatePresence, motion } from "framer-motion";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger 
        toggled={isOpen} 
        size={20} 
        toggle={setOpen} 
        color="black"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hamburguer"
          >
            <ul className="hamburguer-opt">
              {menuOptions.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="hamburguer-opt-item"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      href={route.href}
                    >
                      <span>{route.title}</span>
                      <Icon className="icon" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
