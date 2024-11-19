import BackDoor from "./BackDoor";
import styles from "./Message.module.css";
import PropTypes from "prop-types";

function Message({ message }) {
  return (
    <div className={styles.msg}>
      <p className={styles.message}>
        <span role="img">👋 </span> {message} <BackDoor />
      </p>
    </div>
  );
}

export default Message;
Message.propTypes = {
  message: PropTypes.string.isRequired,
};
