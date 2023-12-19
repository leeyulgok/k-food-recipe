import React, { FC } from 'react';
import styles from './Video.module.css';

interface VideoProps {
  youtubeId: string;
  className?: string;
}

const Video: FC<VideoProps> = ({ youtubeId, className }) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <div className={`${styles.videoContainer} ${className || ''}`.trim()}>
      <iframe
        className={styles.videoIframe}
        src={youtubeEmbedUrl}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
