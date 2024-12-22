import { IconContext } from "react-icons";
import { AppRouter } from "./router/AppRouter";

export const Squirrify = () => {
  return (
    <>
      <IconContext.Provider value={{ className: 'back-icon'}}>
        <AppRouter />
      </IconContext.Provider>
    </>
  );
};
