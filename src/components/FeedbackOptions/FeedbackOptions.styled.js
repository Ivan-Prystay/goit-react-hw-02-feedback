import styled from 'styled-components';

export const ButtonGrupp = styled.div``;

export const Button = styled.button`
  text-transform: capitalize;
  margin-left: 15px;
  outline: none;
  border: none;
  background-color: lightgrey;
  border-radius: 3px;

  &:active {
    background-color: #3485f4;
    color: white;
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
