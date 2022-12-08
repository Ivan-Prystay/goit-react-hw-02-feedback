import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid tomato;
  padding: 20px;
`;

export const ListFeed = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
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

export const StatInfo = styled.div``;
