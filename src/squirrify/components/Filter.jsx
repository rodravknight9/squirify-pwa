import { getCaption } from "../services";
import { captions } from "../../common/captions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slices";
import { useLanguage } from "../../hooks";

const options = [
  {
    caption: captions.today,
    value: "today",
  },
  {
    caption: captions.month,
    value: "month",
  },
  {
    caption: captions.year,
    value: "year",
  },
  {
    caption: captions.other,
    value: "other",
  },
];

export const Filter = () => {
  const lang = useLanguage();
  const dispatch = useDispatch();
  const filterOption = useSelector((state) => state.mainPage.filterOption);
  const [selectedFilter, setSetselectedFilter] = useState(filterOption);

  const onClickOption = (option) => {
    setSetselectedFilter(option);
    dispatch(setFilter(option));
  };

  return (
    <div className="filter">
      <div className="options">
        {options.map((opt, i) => (
          <span
            key={i}
            className={opt.value === selectedFilter ? "selected" : ""}
            onClick={() => onClickOption(opt.value)}
          >
            {getCaption(opt.caption, lang)}
          </span>
        ))}
      </div>
    </div>
  );
};
