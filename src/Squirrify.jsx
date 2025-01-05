import { IconContext } from "react-icons";
import { AppRouter } from "./router/AppRouter";
import store from "./redux/store/store";
import { Provider } from "react-redux";

export const Squirrify = () => {
  return (
    <>
      <IconContext.Provider value={{ className: "back-icon" }}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </IconContext.Provider>
    </>
  );
};
