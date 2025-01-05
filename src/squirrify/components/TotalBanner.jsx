import { getCaption } from "../services";
import { captions } from "../../common/captions";
import { useSelector } from "react-redux";

export const TotalBanner = () => {
  const total = useSelector((state) => state.mainPage.total);

  return (
    <div className="total-banner">
      <h4>{getCaption(captions.total)}</h4>
      <div className="total-currency">
        <span>{"Bs."}</span>
        <span>{total}</span>
        {/* <span>Frenzhy estuvo aqui</span> */}
      </div>
    </div>
  );
};
