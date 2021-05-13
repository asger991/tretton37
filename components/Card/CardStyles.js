import styled from "styled-components";
import px2vw from "utils/px2vw";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 3px 11px 6px rgba(209, 209, 209, 0.59);
  box-shadow: 0px 3px 11px 6px rgba(209, 209, 209, 0.59);
  background-color: #fff;
  height: 100%;
  padding: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(300)};
    height: 100%;
    padding: 1rem;
  }
`;

export const CardImage = styled.div`
  min-height: 300px;
  background-color: #000;
`;

export const CardInfo = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const CardText = styled.div`
  flex-grow: 1;
`;

export const CardIcons = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
  background-color: #fff;
`;

export const CardName = styled.h4`
  color: #333;
  font-size: 1.5rem;
  text-align: left;
  padding: 0.5rem 0;
  background-color: #fff;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const CardOffice = styled.h4`
  color: #666;
  font-size: 1.5rem;
  text-align: left;
  background-color: #fff;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
