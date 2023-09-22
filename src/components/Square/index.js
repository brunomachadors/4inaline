import { SquareUI } from "./style";

const Square = (props) => {
  return <SquareUI onClick={() => props.onClick()}>{props.value}</SquareUI>;
};

export default Square;
