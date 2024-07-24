interface Props {
  text: string;
}

const CustomButton = (props: Props) => {
  return (
    <a
      href="/"
      className="px-6 py-4 rounded-lg hover:text-white hover:bg-primary"
    >
      {props.text}
    </a>
  );
};

export default CustomButton;
