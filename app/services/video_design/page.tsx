import TitleOFPage from '@/components/TitleOFPage'
import VideoPlayer from '@/components/VideoPlayer'
import React from 'react'

const page = () => {
  return (
    <>
    <TitleOFPage title="Video Design" />
    <div className="min-h-96 flex justify-center items-center bg-gray-800 p-4">
      <div className="text-center text-white">
        <p className="text-3xl font-semibold mb-6">Video animations can be used in a wide range of applications - from video advertisements for events, advertising
          campaigns and brand promotions, from educational materials and product explanations to animations for social networks. My creative solutions help your message reach your audience in a visually appealing and effective way.</p>
        <VideoPlayer
          videoSrc="/service-section/VideoDesign/motion-graphics-video-animation.mp4"
          poster="/images/video-thumbnail.jpg"
          controls={false} // Custom play/pause button instead of default controls
          width="80%" // You can specify the width of the video player
          height="auto" // Height can also be adjusted
        />
      </div>
    </div>
  </>
  )
}

export default page