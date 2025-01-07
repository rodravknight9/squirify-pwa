import { IoLanguageSharp } from "react-icons/io5";

export const OptionSettings = ({ title }) => {
  return (
    <>
      <IoLanguageSharp className="icon" size={25} />
      <p>{title}</p>
    </>
  );
};
