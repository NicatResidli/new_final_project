import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './PopupWithForm.css';

export default function PopupWithForm({
  isPopupOpened,
  onClose,
  handleSubmitSignIn,
  account,
  handleChange,
  hasAccount,
  handleHasAccount
}) {


  return (
    <ModalWithForm
      isOpen={isPopupOpened}
      title={hasAccount ? "Sign in" : "Sign up"}
      onClose={onClose}
      onSubmit={handleSubmitSignIn}
      hasAccount={hasAccount}
      handleHasAccount={handleHasAccount}
      hasButton={true}
    >
      <label className='popup__label'>
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={account.email}
        className="popup__input popup__input_type_email"
        onChange={handleChange}
        placeholder="Enter Email"
        required
      />
      <label className='popup__label'>
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        value={account.password}
        className="popup__input popup__input_type_password"
        onChange={handleChange}
        placeholder="Enter Password"
        required
      />
      {
        hasAccount ?
          ""
          :
          <>
            <label className='popup__label'>
              Username
            </label>
            <input
              type="string"
              name="username"
              id="username"
              value={account.username}
              className="popup__input popup__input_type_password"
              onChange={handleChange}
              placeholder="Enter Username"
              required
            />
          </>
      }

    </ModalWithForm>
  )
}
