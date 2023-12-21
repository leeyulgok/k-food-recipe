import { FC } from "react";
import Image from "next/image";

interface ThumbnailProps {
  youtubeId: string;
}

const Thumbnail: FC<ThumbnailProps> = ({ youtubeId }) => {
  return (
    <Image
      src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`}
      alt="Thumbnail"
      width={600}
      height={0}
      priority
    />
  );
};

export default Thumbnail;
