import { useState } from "react";
import { BackHeader } from "../components";
import { OptionSettings, SelectLanguageModal } from "../components/settings";
import Modal from "react-modal";
import { modalStyles } from "../../helpers";

export const Settings = () => {
  const [languageModalIsOpen, setLanguageModalIsOpen] = useState(false);
  const openLanguageModal = () => {
    console.log("hey");
    setLanguageModalIsOpen(true);
  };
  const closeLanguageModal = () => {
    setLanguageModalIsOpen(false);
  };

  return (
    <div className="container">
      <BackHeader title={"settings"} />
      <div className="options-settings">
        <div className="option-settings" onClick={() => openLanguageModal()}>
          <OptionSettings
            title={"Language"}
            // onClickOption={() => {}}
          />
        </div>
      </div>

      {/* Modals  */}
      <Modal
        isOpen={languageModalIsOpen}
        onRequestClose={closeLanguageModal}
        style={modalStyles}
        ariaHideApp={false}
      >
        <SelectLanguageModal />
      </Modal>
    </div>
  );
};
