import { getCaption } from "../services";
import { captions } from "../../common/captions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices";

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
  const dispatch = useDispatch();
  const [selectedFilter, setSetselectedFilter] = useState("today");

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
            {getCaption(opt.caption)}
          </span>
        ))}
      </div>
    </div>
  );
};
