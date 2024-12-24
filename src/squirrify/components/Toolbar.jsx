import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Toolbar = () => {
  const navigate = useNavigate();

  const onAddClick = () => {
    navigate("add-expense");
  };

  return (
    <div className="toolbar">
      <div className="buttons">
        <button className="btn-opt">
          <IoMdAdd />
        </button>
        <button className="btn-opt">
          <IoMdAdd />
        </button>
        <button className="btn-opt">
          <IoMdAdd />
        </button>

        <button className="add-button" onClick={onAddClick}>
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};
