/* eslint-disable import/no-unresolved */
import styled from "styled-components";
import StyledContainer from "components/Container";
import StyledCard from "components/Card";
import Layout from "components/Layout/";

const Home = ({ employees }) => {
  return (
    <Layout>
      <StyledHeader>The fellowship of the tretton37</StyledHeader>
      <StyledDiv>PELLE</StyledDiv>
      <StyledContainer>
        {employees.map((employee) => (
          <StyledCard key={employee.id} data={employee} />
        ))}
      </StyledContainer>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.1337co.de/v3/employees", {
    headers: {
      Authorization: process.env.API_KEY,
    },
  });
  const employees = await res.json();
  return {
    props: {
      employees,
    },
  };
}

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
