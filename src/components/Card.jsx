// const Card = ({ text }) => {
//   return <div>{text}</div>;
// };

const Card = ({ text, children }) => {
  return (
    <div>
      {text}
      {children}
    </div>
  );
};

export default Card;
