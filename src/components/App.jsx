import { FeedbackList } from './FeedbackList/FeedbackList';

import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  padding: 10px;
  background-color: lightcoral;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: '#010101';
`;

export const App = () => {
  return (
    <AppWrapper>
      <FeedbackList />
    </AppWrapper>
  );
};
