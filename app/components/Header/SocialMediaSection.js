import styled from 'styled-components';
// background-color: #708090 !important;
export default styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
  }
  cursor: pointer;
  color: white;
  background-color: black;
  padding-top: 1.5%;
  padding-bottom: 1%;
  padding-right: 2%;
  border-bottom: 2.5px solid #ED7170 !important;
`;
