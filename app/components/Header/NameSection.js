import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #202c45 !important;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
  color: white;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
`;
