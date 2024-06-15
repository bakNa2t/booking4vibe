import { useState } from "react";

import Button from "../../ui-blocks/Button";
import Modal from "../../ui-blocks/Modal";
import ApartmentsCreatingForm from "./ApartmentsCreatingForm";

function ApartmentAddingByModal() {
  const [isOpneModal, setIsOpneModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpneModal(!isOpneModal)}>
        Add new apartment
      </Button>
      {isOpneModal && (
        <Modal>
          <ApartmentsCreatingForm />
        </Modal>
      )}
    </div>
  );
}

export default ApartmentAddingByModal;
