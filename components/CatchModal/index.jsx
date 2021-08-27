import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalButton,
  ModalInputContainer,
  ModalInput,
} from "../../styles/components/CatchModal";
import Image from "next/image";
export default function CatchModal({
  modal,
  setModal,
  success,
  setSuccess,
  name,
  setName,
  handleSave,
  errorInput,
  setErrorInput,
}) {
  const handleInput = (e) => {
    setName(e.target.value);
    setErrorInput(null);
  };
  return (
    <Modal isOpen={modal}>
      <ModalContent>
        {success ? (
          <ModalTitle success={success}>
            Successful ! Gotta catch em' all!
          </ModalTitle>
        ) : (
          <ModalTitle success={success}>Failed ! It ran away....</ModalTitle>
        )}
        <br />
        {success ? (
          <>
            <Image
              src="/img/pokeball.png"
              alt="success"
              width={200}
              height={200}
            />
            <ModalInputContainer>
              <ModalInput
                type="text"
                value={name}
                onChange={handleInput}
                placeholder="Give it nickname to keep *"
              />
            </ModalInputContainer>
            {errorInput ? <p style={{ color: "red" }}>{errorInput}</p> : null}
            <ModalButton onClick={handleSave}>SAVE</ModalButton>
          </>
        ) : (
          <>
            <Image
              src="/img/footsteps.png"
              alt="failed"
              width={200}
              height={200}
            />
            <ModalButton
              onClick={() => {
                setModal(false);
                setSuccess(false);
              }}
            >
              BACK
            </ModalButton>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
