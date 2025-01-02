import { useEffect, useState } from "react";
import { calculateTotal, getCaption } from "../services";
import { captions } from "../../common/captions";
import { getByDate } from "../../indexeddb/database";

export const TotalBanner = () => {
  const [total2, setTotal] = useState(0);

  useEffect(() => {
    //TODO: Better to use Redux here
    const initialize = async () => {
      setTimeout(async () => {
        const exp = await getByDate("today");

        const tol = await calculateTotal(exp);
        setTotal(tol);
      }, "2000");
    };

    initialize();
  }, [total2]);

  return (
    <div className="total-banner">
      <h4>{getCaption(captions.total)}</h4>
      <div className="total-currency">
        <span>{"Bs."}</span>
        <span>{total2}</span>
        {/* <span>Frenzhy estuvo aqui</span> */}
      </div>
    </div>
  );
};
