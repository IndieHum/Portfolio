const Modal = document.querySelector("dialog");
const ModalText = Modal.querySelector("p");

function ShowModal(text) {
    Modal.showModal();
    ModalText.innerText = text;
}

function CloseModal() {
    Modal.close();
}

export { ShowModal, CloseModal };
