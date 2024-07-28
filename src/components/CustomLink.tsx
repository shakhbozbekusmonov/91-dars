interface Props {
  text: string;
  linkTo: string;
}

const CustomLink = (props: Props) => {
  return (
    <a
      href={props.linkTo}
      className="px-6 py-4 rounded-lg hover:text-white hover:bg-primary"
    >
      {props.text}
    </a>
  );
};

export default CustomLink;
