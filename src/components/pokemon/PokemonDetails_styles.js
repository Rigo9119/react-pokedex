import styled from '@emotion/styled'
import colors from '../../styles/colors'

// styles

const Wrapper = styled.div `
  align-items: center;
  display: ${props => props.showDetails === true ? 'flex' : 'none'};
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

const Details = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 50%;
`;

const Name = styled.h2`
  color: ${colors.yellow};
  font-size: 29px;
  text-transform: uppercase;
  margin: 15px 0px;
`;

const Stats = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 50%;
`;

const Title = styled.h3`
  color: ${colors.white};
  font-size: 24px;
  text-transform: uppercase;
  margin: 15px 0px;
`;

export {
  Wrapper,
  Details,
  Name,
  Stats,
  Title
}