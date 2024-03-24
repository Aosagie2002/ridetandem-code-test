import styled from 'styled-components';

interface DueTextProps {
    isDue?: boolean; // Make isDue prop optional
}

export const StyledCard = styled.div`
  width: 440px;
  border-radius: 6px;
  border: 1px solid #d7d7d7;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const CardHeader = styled.div`
  font-size: 20px;
`;

export const CardDetails = styled.div<{ due?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.due ? 'red' : 'inherit')};
`;

export const DueText = styled.span<DueTextProps>`
  color: ${(props) => (props.isDue ? 'red' : 'inherit')}; /* Color the text red if isDue, otherwise inherit */
`;
