import AuthForm from "../form/auth-form";
import Logo from "components/ui/logo";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./form-modal.module.scss";

const FormModal = ({ closeForm }: { closeForm: () => void }) => {
  return (
    <div onClick={closeForm} className={classes.modal}>
      <div className={classes.modal__form} onClick={(e) => e.stopPropagation()}>
        <div className={classes.modal__header}>
          <Logo form={true} />
          <button className={classes.modal__btn} onClick={closeForm}>
            <AiOutlineClose className={classes.modal__btn_icon} />
          </button>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default FormModal;
