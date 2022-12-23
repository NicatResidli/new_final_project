import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegistrationSuccess.css';

export default function RegistrationSuccess({
  isRegisterSuccess,
  onClose,
  handleRegistrationLink
}) {

  return (
    <ModalWithForm
      isOpen={isRegisterSuccess}
      hasButton={false}
      title={"Registration sucessfully completed !"}
      onClose={onClose}
    >
      <button className='registration__link'
        onClick={handleRegistrationLink}
        type='button'
      >
        Sign in
      </button>
    </ModalWithForm>

  )
}
