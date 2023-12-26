import { FC } from "react";
import Image from "next/image";

interface ThumbnailProps {
  youtubeId: string;
}

const Thumbnail: FC<ThumbnailProps> = ({ youtubeId }) => {
  const width = 1000;
  const height = (width * 9) / 16;

  return (
    <Image
      src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`}
      alt="Thumbnail"
      width={width}
      height={height}
      priority
    />
  );
};

export default Thumbnail;
