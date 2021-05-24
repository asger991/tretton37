import Link from "next/link";
import CardImage from "components/CardImage";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  Card,
  CardInfo,
  CardText,
  CardName,
  CardOffice,
  IconContainer,
} from "./CardStyles";

const StyledCard = ({ data }) => {
  const { id, name, office, linkedIn, gitHub, twitter } = data;
  const linkedInAccount = `https://www.linkedin.com${linkedIn}`;
  const githubAccount = `https://www.github.com/${gitHub}`;
  const twitterAccount = `https://www.twitter.com/${twitter}`;
  return (
    <Card key={id}>
      <CardImage employee={data} />

      <CardInfo>
        <CardText>
          <CardName aria-label="Employee name">{name}</CardName>
          <CardOffice aria-label="Employee office">Office: {office}</CardOffice>
        </CardText>
        <IconContainer aria-label="Employee's other accounts">
          {linkedIn && (
            <Link href={linkedInAccount} passHref>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                aria-label="Linkedin"
                tabIndex="0"
                data-cy="linkedin-link"
              />
            </Link>
          )}
          {gitHub && (
            <Link href={githubAccount} passHref>
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="2x"
                aria-label="Employee Github"
                tabIndex="0"
                data-cy="github-link"
              />
            </Link>
          )}
          {twitter && (
            <Link href={twitterAccount} passHref>
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="2x"
                aria-label="Employee Twitter"
                tabIndex="0"
                data-cy="twitter-link"
              />
            </Link>
          )}
        </IconContainer>
      </CardInfo>
    </Card>
  );
};

export default StyledCard;
