import Button from "../../ui-blocks/Button";
import Modal from "../../ui-blocks/Modal";
import ApartmentsCreatingForm from "./ApartmentsCreatingForm";

function ApartmentAddingByModal() {
  return (
    <Modal>
      <Modal.Open opens="apartment-form">
        <Button>Add new apartment</Button>
      </Modal.Open>
      <Modal.Window name="apartment-form">
        <ApartmentsCreatingForm />
      </Modal.Window>
    </Modal>
  );
}

// function ApartmentAddingByModal() {
//   const [isOpneModal, setIsOpneModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpneModal(!isOpneModal)}>
//         Add new apartment
//       </Button>
//       {isOpneModal && (
//         <Modal onClose={() => setIsOpneModal(false)}>
//           <ApartmentsCreatingForm onCloseModal={() => setIsOpneModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default ApartmentAddingByModal;
