/* eslint-disable import/no-unresolved */
import Link from "next/link";
import styled from "styled-components";
import Panel from "components/Panel";
import Employees from "components/Employees";
import Layout from "components/Layout";

const Home = ({ employees }) => {
  return (
    <Layout>
      <Link href="/">
        <StyledLink data-cy="home-link">
          The fellowship of the tretton37
        </StyledLink>
      </Link>
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

const StyledLink = styled.a`
  font-size: 2rem;
`;

export default Home;
