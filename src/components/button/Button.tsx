type Props = {
  text: string;
  func?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<Props> = ({ text, func }) => {
  return (
    <button className="button" onClick={func}>
      {text}
    </button>
  );
};
