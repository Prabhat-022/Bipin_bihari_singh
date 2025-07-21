import styled from 'styled-components';
import "./button.css";

const Button = styled.button`
  border: 2px solid blue;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: red;
  }
`;

export default Button
