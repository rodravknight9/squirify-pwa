import { getCaption } from "../services";
import { captions } from "../../common/captions";
import { useSelector } from "react-redux";
import { useLanguage } from "../../hooks";

export const TotalBanner = () => {
  const lang = useLanguage();
  const total = useSelector((state) => state.mainPage.total);

  return (
    <div className="total-banner">
      <h4>{getCaption(captions.total, lang)}</h4>
      <div className="total-currency">
        <span>{"Bs."}</span>
        <span>{total}</span>
        {/* <span>Frenzhy estuvo aqui</span> */}
      </div>
    </div>
  );
};
