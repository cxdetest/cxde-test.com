import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-content: center;
  gap: 20px 0;
  height: 80vh;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    height: initial;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
  }
`;

export const Flex = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 992px) {
    height: initial;
    margin: 50px auto;
  }
`;

export const Card = styled.section`
  width: 280px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 3px 5px #888;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RulerContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-align: center;
  height: 20vh;
  width: 100%;
  box-shadow: 0 3px 5px #888;
  border-radius: 10px;
  font-size: 20px;

  * {
    margin: 5px 0;
  }

  @media screen and (max-width: 992px) {
    height: auto;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: rgb(9, 112, 160);
  color: rgb(26, 26, 26);
  cursor: pointer;
  padding: 15px 30px;
  border-radius: 10px;
  width: 35vw;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: rgba(9, 112, 160, 0.9);
  }
`;
