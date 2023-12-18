import Image from "next/image";
import { FC } from "react";

const RecipeCard: FC = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      {/* <Image src={image} alt={title} width={300} height={200} />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{description}</p>
      </div> */}
    </div>
  );
};

export default RecipeCard;
