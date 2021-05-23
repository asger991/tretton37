import { useRef, useState, useEffect } from "react";

import usePagination from "utils/usePagination";

import StyledContainer from "components/Container";
import StyledCard from "components/Card";

const Employees = ({ data }) => {
  const { next, currentPage, currentData, maxPage } = usePagination(data, 16);

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

  return (
    <>
      <StyledContainer>
        {currentEmployees &&
          currentEmployees.map((employee) => (
            <StyledCard key={employee.id} data={employee} />
          ))}
      </StyledContainer>
      {currentPage !== maxPage ? (
        <h1 ref={setElement}>Fetching more Ninjas...</h1>
      ) : (
        <h1>You have met all our Ninjas - for now...</h1>
      )}
    </>
  );
};

export default Employees;
