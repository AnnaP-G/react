import clsx from "clsx";
// import css from "../components/alert.module.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        "alert",
        variant,
        outlined && "is-outlined",
        elevated && "is-elevated"
      )}
    >
      {children}
    </p>
  );
};

export default Alert;

// Бібліотека clsx для завдань з безліччю класів, що задаються згідно певних умов.
