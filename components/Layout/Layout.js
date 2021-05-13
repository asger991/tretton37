import styled from "styled-components";

const PageLayout = styled.div`
  padding: 3rem;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return <PageLayout>{children}</PageLayout>;
}
