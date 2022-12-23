import './ModalWithForm.css';
export default function ModalWithForm({
  name,
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  hasAccount,
  handleHasAccount,
  hasButton
}) {

  return (
    <div
      className={`modal ${name} ${isOpen ? 'modal_type_opened' : ''
        }`}
    >
      <div className="modal__container">
        <button
          type="button"
          className="modal__button-closed"
          onClick={onClose} >
        </button>
        <form
          className="modal__form"
          name={name}
          onSubmit={onSubmit}
        >
          <fieldset className="modal__set">
            <h2 className="modal__title">{title}</h2>
            {children}
            {
              hasButton
                ?
                <>
                  <button
                    type="submit"
                    className="modal__button"
                  >
                    {title}
                  </button>
                  <p className="modal__detail">
                    or
                    {
                      hasAccount ?
                        <button className="modal__link"
                          onClick={handleHasAccount}
                          type='button'
                        >
                          Sign up
                        </button>
                        :
                        <button className="modal__link"
                          onClick={handleHasAccount}
                          type='button'
                        >
                          Sign in
                        </button>
                    }
                  </p>
                </>
                :
                ""
            }
          </fieldset>
        </form>
      </div>
    </div>
  )
}
