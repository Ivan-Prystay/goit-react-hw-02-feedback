import styled from 'styled-components';

export const ButtonGrupp = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Button = styled.button`
  text-transform: capitalize;
  outline: none;
  border: none;
  background-color: #caffff;
  border-radius: 3px;
  font-size: 12px;
  padding: 5px 5px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }

  &:active {
    background-color: #3485f4;
    color: white;
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
