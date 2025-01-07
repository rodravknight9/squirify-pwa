import { useState } from "react";
import { BackHeader } from "../components";
import { OptionSettings, SelectLanguageModal } from "../components/settings";
import Modal from "react-modal";
import { modalStyles } from "../../helpers";
import { getCaption } from "../services";
import { captions, titles } from "../../common";
import { useLanguage } from "../../hooks";

export const Settings = () => {
  const lang = useLanguage();

  const [languageModalIsOpen, setLanguageModalIsOpen] = useState(false);
  const openLanguageModal = () => {
    setLanguageModalIsOpen(true);
  };
  const closeLanguageModal = () => {
    setLanguageModalIsOpen(false);
  };

  return (
    <div className="container">
      <BackHeader title={getCaption(titles.Settings, lang)} />
      <div className="options-settings">
        <div className="option-settings" onClick={() => openLanguageModal()}>
          <OptionSettings
            title={getCaption(captions.language, lang)}
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
        <SelectLanguageModal onCloseModal={closeLanguageModal} />
      </Modal>
    </div>
  );
};
