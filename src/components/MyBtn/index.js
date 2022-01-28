import MyBtnWrapper from "./MyBtnWrapper";

const MyBtn = ({ icon, title }) => {
  return (
    <MyBtnWrapper>
      {icon} {title}
    </MyBtnWrapper>
  );
};

export default MyBtn;
