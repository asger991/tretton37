import Image from "next/image";

const CardImage = ({ employee }) => {
  const { name, imagePortraitUrl } = employee;

  return (
    <div>
      {imagePortraitUrl != null ? (
        <Image
          alt={name}
          src={imagePortraitUrl}
          layout="responsive"
          height="150"
          width="150"
        />
      ) : (
        <Image
          alt="missing-picture"
          src="/avatar.png"
          layout="responsive"
          height="150"
          width="150"
        />
      )}
    </div>
  );
};

export default CardImage;
