import Button from "../../ui-blocks/Button";
import Modal from "../../ui-blocks/Modal";
import ApartmentsCreatingForm from "./ApartmentsCreatingForm";

function ApartmentAddingByModal() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="apartment-form">
          <Button>Add new apartment</Button>
        </Modal.Open>
        <Modal.Window name="apartment-form">
          <ApartmentsCreatingForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ApartmentAddingByModal;
