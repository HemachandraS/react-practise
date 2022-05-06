import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => {
    return props.my_background_color;
  }};
  padding: 5px 15px;
  color: ${(props) => {
    return props.my_color;
  }};
  border:${(props) => {
    return props.my_border;
  }};
  margin: 0px 10px;
  border-radius: 3px;
  &:hover{
      cursor: pointer;
  }
`;
export { Button };
