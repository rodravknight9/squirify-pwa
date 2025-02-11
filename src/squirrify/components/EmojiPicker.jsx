import { Category } from "./Category";
import { MoreButton } from "./MoreButton";
import { defaultCategoriesArray } from "../../helpers/defaultCategories";
import Modal from "react-modal";
import { useState } from "react";
import { PickCategory } from "./PickCategory";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    height: "fit-content",
  },
};

export const EmojiPicker = ({ onCategoryChange, selectedCategory }) => {
  //TODO improve the selection based by the user preferences
  const defCategories = defaultCategoriesArray.slice(0, 3);

  const onClickCategory = (value) => {
    onCategoryChange(value);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="emoji-picker">
      {defCategories.map((cat, i) => (
        <div
          key={i}
          className={`emoji-option ${
            cat.uuid === selectedCategory ? "selected" : ""
          }`}
          onClick={() => onClickCategory(cat.uuid)}
        >
          <Category emojiName={cat.emoji} size={40} categoryName={cat.name} />
        </div>
      ))}
      <div className="emoji-option" onClick={openModal}>
        <MoreButton />
      </div>
      <Modal
        // id="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <PickCategory />
      </Modal>
    </div>
  );
};
