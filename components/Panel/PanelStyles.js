import styled from "styled-components";

export const StyledPanel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin: 2rem 0;
  padding: 0.5rem 1rem;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 11px 6px rgba(209, 209, 209, 0.59);
  box-shadow: 0px 3px 11px 6px rgba(209, 209, 209, 0.59);

  @media (min-width: 768px) {
    height: 3rem;
    flex-direction: row;
  }
`;

export const StyledTitle = styled.h3`
  background-color: transparent;
  margin: 0.5rem;
`;

export const StyledButton = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  border: 2px solid #666;

  &:hover {
    background-color: #666;
    color: #fff;
  }
`;
