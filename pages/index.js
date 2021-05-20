/* eslint-disable import/no-unresolved */
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import usePagination from "utils/usePagination";
import StyledContainer from "components/Container";
import StyledCard from "components/Card";
import Layout from "components/Layout";

const Home = ({ employees }) => {
  const { next, currentPage, currentData, maxPage } = usePagination(
    employees,
    16
  );

  const currentEmployees = currentData();
  const [element, setElement] = useState(null);
  const observer = useRef();
  const prevY = useRef(0);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const { y } = firstEntry.boundingClientRect;

        if (prevY.current > y) {
          next();
        }
        prevY.current = y;
      },
      { threshold: 0 }
    );
  }, []);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  console.log(employees);
  return (
    <Layout>
      <StyledHeader>The fellowship of the tretton37</StyledHeader>
      <StyledDiv>PELLE</StyledDiv>
      <StyledContainer>
        {currentEmployees &&
          currentEmployees.map((employee) => (
            <StyledCard key={employee.id} data={employee} />
          ))}
      </StyledContainer>
      {currentPage !== maxPage ? (
        <h1 ref={setElement}>Fetching more Ninjas...</h1>
      ) : (
        <h1>You've met all our Ninjas - for now...</h1>
      )}
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
