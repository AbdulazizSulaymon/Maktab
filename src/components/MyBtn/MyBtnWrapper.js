import styled from "styled-components";

const MyBtnWrapper = styled.button`
  background-color: blue;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  svg {
    margin-right: 10px;
  }

  &:active {
    transform: translateY(-10px) !important;
  }
`;

export default MyBtnWrapper;
