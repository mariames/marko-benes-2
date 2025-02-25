"use client";
import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  videoSrc: string; // The URL of the video
  poster?: string; // Optional poster image for the video (thumbnail)
  controls?: boolean; // Optionally enable/disable default video controls
  width?: string; // Optional width for the video player
  height?: string; // Optional height for the video player
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, poster, controls = true, width = '100%', height = 'auto' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Play/Pause functionality
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={`relative w-full max-w-${width} h-${height} bg-black`}>
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster} // Display poster image before the video starts
        controls={controls} // Enable/disable default controls
        className="w-full h-full object-cover rounded-lg"
      />
      
      {/* Custom play/pause button (if needed) */}
      {!controls && (
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg text-lg"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
