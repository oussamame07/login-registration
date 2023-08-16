// // components/VideoPlayer.js
// import React from 'react';
// import videojs from 'video.js'; // Make sure you have video.js installed

// const VideoPlayer = ({ src }) => {
//   React.useEffect(() => {
//     // Initialize video.js player
//     const player = videojs('my-video', {
//       autoplay: true,
//       controls: true,
//       sources: [{ src, type: 'application/x-mpegURL' }], // Adjust the type if needed
//     });

//     return () => {
//       // Cleanup when component unmounts
//       if (player) {
//         player.dispose();
//       }
//     };
//   }, [src]);

//   return (
//     <div data-vjs-player>
//       <video id="my-video" className="video-js vjs-default-skin" />
//     </div>
//   );
// };

// export default VideoPlayer;
