import TitleWrapper from "./TitleWrapper";

const Title = ({ children }) => {
  return <TitleWrapper as="h1">{children}</TitleWrapper>;
};

export default Title;
