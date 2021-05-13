/* eslint-disable import/no-unresolved */
import styled from "styled-components";
import StyledContainer from "components/Container";
import StyledCard from "components/Card";
import Layout from "components/Layout/";

const Home = ({}) => {
  return (
    <Layout>
      <StyledHeader>The fellowship of the tretton37</StyledHeader>
      <StyledDiv>PELLE</StyledDiv>
      <StyledContainer>
        {testData.map((card) => (
          <StyledCard key={testData.id} data={card} />
        ))}
      </StyledContainer>
    </Layout>
  );
};

const StyledHeader = styled.h2`
  font-size: 2rem;
`;

const StyledDiv = styled.div`
  height: 3rem;
  width: 100%;
  margin: 2rem 0;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 11px 6px rgba(209, 209, 209, 0.59);
  box-shadow: 0px 3px 11px 6px rgba(209, 209, 209, 0.59);
`;

export default Home;

const testData = [
  {
    id: 1,
    name: "Janie Barber",
    office: "Lund",
  },
  {
    id: 2,
    name: "Sadie Morales",
    office: "Lund",
  },
  {
    id: 3,
    name: "Janie Barber",
    office: "Lund",
  },
  {
    id: 4,
    name: "Sadie Morales",
    office: "Lund",
  },
  {
    id: 5,
    name: "Janie Barber",
    office: "Lund",
  },
  {
    id: 6,
    name: "Sadie Morales",
    office: "Lund",
  },
  {
    id: 7,
    name: "Janie Barber",
    office: "Lund",
  },
  {
    id: 8,
    name: "Sadie Morales",
    office: "Lund",
  },
];
