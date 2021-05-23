/* eslint-disable no-nested-ternary */
import { StyledPanel, StyledTitle, StyledButton } from "./PanelStyles";

const Panel = ({ data }) => {
  const employees = data;
  const sortByNameAndOffice = () => {
    employees.sort((a, b) =>
      a.office > b.office
        ? 1
        : a.name === b.name
        ? a.size > b.size
          ? 1
          : -1
        : -1
    );
  };

  const sortByName = () => {
    employees.sort((a, b) => (a.name > b.name ? 1 : -1));
  };

  return (
    <StyledPanel>
      <StyledTitle>Filters</StyledTitle>
      <StyledButton onClick={sortByNameAndOffice}>
        Sort by name/office
      </StyledButton>
      <StyledButton onClick={sortByName}>Sort by name only</StyledButton>
    </StyledPanel>
  );
};

export default Panel;
