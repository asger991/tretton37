/* eslint-disable import/no-unresolved */
import styled from "styled-components";
import Panel from "components/Panel";
import Employees from "components/Employees";
import Layout from "components/Layout";

const Home = ({ employees }) => {
  // console.log(employees[0]);
  return (
    <Layout>
      <StyledHeader>The fellowship of the tretton37</StyledHeader>
      <Panel data={employees} />
      <Employees data={employees} />
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

export default Home;
