/* eslint-disable no-nested-ternary */
import { StyledPanel, StyledTitle, StyledButton } from "./PanelStyles";

const Panel = ({ data }) => {
  const sortByNameAndOffice = () => {
    data.sort((a, b) =>
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
    data.sort((a, b) => (a.name > b.name ? 1 : -1));
  };

  return (
    <StyledPanel aria-label="Filters">
      <StyledTitle>Filters</StyledTitle>
      <StyledButton
        onClick={sortByNameAndOffice}
        onKeyPress={(event) => event.key === "Enter" && sortByNameAndOffice}
        aria-label="Sort employees shown by name and office"
        role="button"
        tabIndex="0"
        title="sort by name and office"
      >
        Sort by name/office
      </StyledButton>
      <StyledButton
        onClick={sortByName}
        onKeyPress={(event) => event.key === "Enter" && sortByName}
        aria-label="Sort employees shown by name only"
        role="button"
        tabIndex="0"
        title="sort by name only"
      >
        Sort by name only
      </StyledButton>
    </StyledPanel>
  );
};

export default Panel;
