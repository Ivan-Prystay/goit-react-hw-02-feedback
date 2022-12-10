import styled from 'styled-components';

export const Statistics = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ButtonGrupp = styled.div``;

export const Button = styled.button`
  text-transform: capitalize;
  margin-left: 15px;

  &:active {
    background-color: blue;
  }
  &:hover {
    cursor: pointer;
  }
`;
