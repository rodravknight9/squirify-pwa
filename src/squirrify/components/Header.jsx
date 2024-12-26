import { BiCategory } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-header">
      <div className="content">
        <h2>Squirify</h2>
        <div className="nav-opt">
          <BiCategory
            className="icon"
            size={25}
            onClick={() => navigate("add-category")}
          />
          <CiSettings className="icon" size={25} />
        </div>
      </div>
    </div>
  );
};
