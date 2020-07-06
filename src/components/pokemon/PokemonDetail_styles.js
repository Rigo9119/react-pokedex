import styled from '@emotion/styled'
import colors from '../../styles/colors'

// Styles

const Detail = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 5px;
  width: 100%;
`;

const Title = styled.h4`
  font-size: 18px;
  padding-bottom: 8px;
  width: 100%;
`;

const Text = styled.p`
  color: ${colors.yellow};
  font-size: 14px;
  width: 100%;
`;

export {
  Detail,
  Title,
  Text
}