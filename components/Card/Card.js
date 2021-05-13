import {
  Card,
  CardImage,
  CardInfo,
  CardText,
  CardIcons,
  CardName,
  CardOffice,
} from "./CardStyles";

const StyledCard = ({ data }) => {
  return (
    <Card key={data.id}>
      <CardImage>IMAGE</CardImage>

      <CardInfo>
        <CardText>
          <CardName>{data.name}</CardName>
          <CardOffice>Office: {data.office}</CardOffice>
        </CardText>
        <CardIcons>Pelle</CardIcons>
      </CardInfo>
    </Card>
  );
};

export default StyledCard;
