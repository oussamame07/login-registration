// // // components/StreamPage.js

// import React, { useState, useEffect } from "react";
// // import flvjs from "flv.js";

// function StreamPage() {
//   const [isStreaming, setIsStreaming] = useState(false);
//   const [accessKey, setAccessKey] = useState("");

//   useEffect(() => {
//     fetchAccessKey();
//   }, []);

//   const startStream = async () => {
//     try {
//       // Logic to start the stream
//       setIsStreaming(true);
//     } catch (error) {
//       console.error("Error starting stream:", error);
//     }
//   };

//   const stopStream = async () => {
//     try {
//       // Implement logic to stop the stream
//       setIsStreaming(false);
//     } catch (error) {
//       console.error("Error stopping stream:", error);
//     }
//   };

//   const fetchAccessKey = () => {
//     fetch("http://localhost:5000/get-access-key")
//       .then((res) => res.text())
//       .then((data) => {
//         setAccessKey(data); // Store the received access key
//       })
//       .catch((error) => {
//         console.error("Error fetching access key:", error);
//       });
//   };

// //   return (
// //     <div>
// //       <h2>Stream Page</h2>
// //       {isStreaming ? (
// //         <div>
// //           <p>Access Key: {accessKey}</p>
// //           {/* Add your video player component here */}
// //           <button onClick={stopStream}>Stop Stream</button>
// //         </div>
// //       ) : (
// //         <button onClick={startStream}>Start Stream</button>
// //       )}
// //     </div>
// //   );
// // }
// return (
//     <div>
//       <h2>Stream Page</h2>
//       {isStreaming ? (
//         <div>
//           <p>Access Key: {accessKey}</p>
//           <video controls autoPlay>
//           <source src={`http://localhost:8000/live/stream.flv${accessKey}`} />
//             Your browser does not support the video tag.
//           </video>
//           <button onClick={stopStream}>Stop Stream</button>
//         </div>
//       ) : (
//         <button onClick={startStream}>Start Stream</button>
//       )}
//     </div>
//   );
// }

// export default StreamPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import flvjs from "flv.js"; 


function StreamPage() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  // const [facebookStreamId, setFacebookStreamId] = useState("");
  // const [accessToken, setAccessToken] = useState("");
  // const [liveVideos, setLiveVideos] = useState([]); // Define the state for live videos


  useEffect(() => {
    fetchAccessKey();
  }, []);

  const startStream = async () => {
    try {
      // const response = await axios.post("/start-facebook-stream", {
      //   accessToken: 'YOUR_FACEBOOK_ACCESS_TOKEN', // Replace with your user's access token
      // });
  
      // const { facebookStreamId } = response.data;
      // setFacebookStreamId(facebookStreamId);
      // Logic to start the stream
      setIsStreaming(true);
    } catch (error) {
      console.error("Error starting stream:", error);
    }
  };
  const startFacebookStream = async () => {
    try {
      // Make a POST request to start the Facebook Live stream
      const response = await axios.post("/start-facebook-stream", {
        accessToken: "EAAOHZCezAElsBOw6m5MQKIieN2EgmBZB36M67GrvAou7aowbBNfYTPrrYcELIZBF4ANk03gB3Y7Kp9jMwcCw6FHlK0CFWNo2URmPDuBQr3Qoud5BEI4HwPxomLsoPRjb7dx6WeEJlsG1glR37EMcQLwZB6r1tRZAukrTxot8mZAzdOkvMZA06laZCheZC7mzgalZC8zCqwhZAdUWypJ9oOru1yVmfZBMZCmlW9IHQ1qHeRwZDZD", // Replace with the actual user access token
      });

      // Handle the response and update state accordingly
      const { status, facebookStreamId } = response.data;
      if (status === "ok") {
        // Set the Facebook stream ID and update UI accordingly
        facebookStreamId(facebookStreamId);
        setIsStreaming(true);
      } else {
        // Handle error case
        console.error("Error starting Facebook Live stream");
      }
    } catch (error) {
      console.error("Error starting Facebook Live stream:", error);
    }
  };


  

  
  const stopStream = async () => {
    try {
      // Implement logic to stop the stream
      setIsStreaming(false);
    } catch (error) {
      console.error("Error stopping stream:", error);
    }
  };

  const fetchAccessKey = () => {
    fetch("http://localhost:5000/get-access-key")
      .then((res) => res.text())
      .then((data) => {
        setAccessKey(data); // Store the received access key
      })
      .catch((error) => {
        console.error("Error fetching access key:", error);
      });
  };

  

  // const startFacebookStream = async () => {
  //   try {
  //     // Make a POST request to start the Facebook Live stream
  //     const response = await axios.post("/start-facebook-stream", {
  //       accessToken: accessToken, // Pass the access token obtained during login
  //     });

  //     setFacebookStreamId(response.data.facebookStreamId);
  //   } catch (error) {
  //     console.error("Error starting Facebook Live stream:", error);
  //   }
  // };
  // const stopFacebookStream = async () => {
  //   try {
  //     // Make a POST request to stop the Facebook Live stream
  //     await axios.post("/stop-facebook-stream", {
  //       accessToken: 'EAAOHZCezAElsBOZCua7hpZAdPYwYoRVzUBYAGpYqLptsnD6TarOgSHYo4guZBheHwCk9ADT5Oe8ZCGvTCzvREoVV1mB0SNBxMyFZB4HHYsvzVfANBPSdLQfIOyHaaYZAHBs2X8NgjzhSZC81I8ChBTuAaVU5CFA7gFaEf9D7y0oV1Jnh5KmpIycOrK3zZA3tZBMe2oLZCnOld8Kn06HelmsnHXwgBgQsEZAritZCoNd28qkfyqbGWaZAjFqDkfbLJoCKkvzBDhp8NY2TC5fBAZ',
  //       facebookStreamId: '993949598618203',
  //     });

  //     // Clear the Facebook stream ID after stopping
  //     setFacebookStreamId("");
  //   } catch (error) {
  //     console.error("Error stopping Facebook Live stream:", error);
  //   }
  // };

  useEffect(() => {
    if (isStreaming) {
      if (flvjs.isSupported()) {
        var videoElement = document.getElementById("videoElement");
        var flvPlayer = flvjs.createPlayer({
          type: "flv",
          url: `http://localhost:8000/live/stream.flv${accessKey}`,
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
      }
    }
  }, [isStreaming, accessKey]);

  return (
    <div>
      <h2>Stream Page</h2>
      {isStreaming ? (
        <div>
          <p>Access Key: {accessKey}</p>
          <video id="videoElement" controls autoPlay></video>
          <button onClick={stopStream}>Stop Stream</button>
          
        </div>
      ) : (
        <div>
        <button onClick={startStream}>Start Stream</button>
        <button onClick={startFacebookStream}>Start Facebook Stream</button>
       </div>
      )}
    </div>
  );
}

export default StreamPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import flvjs from "flv.js"; 

// function StreamPage() {
//   const [isStreaming, setIsStreaming] = useState(false);
//   const [accessKey, setAccessKey] = useState("");
//   const [liveVideos, setLiveVideos] = useState([]);

//   const USER_ID = '993949598618203';

//   useEffect(() => {
//     fetchAccessKey();
//   }, []);

//   const startStream = async () => {
//     try {
//       // Logic to start the stream
//       setIsStreaming(true);
//     } catch (error) {
//       console.error("Error starting stream:", error);
//     }
//   };

//   const stopStream = async () => {
//     try {
//       // Implement logic to stop the stream
//       setIsStreaming(false);
//     } catch (error) {
//       console.error("Error stopping stream:", error);
//     }
//   };

//   const fetchAccessKey = () => {
//     fetch("http://localhost:5000/get-access-key")
//       .then((res) => res.text())
//       .then((data) => {
//         setAccessKey(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching access key:", error);
//       });
//   };
//   useEffect(() => {
//     window.fbAsyncInit = function () {
//       FB.init({
//         appId: '993949598618203', // Replace with your actual App ID
//         autoLogAppEvents: true,
//         xfbml: true,
//         version: 'v17.0', // Replace with the desired version
//       });
//     };
  
//     // Load the Facebook SDK asynchronously
//     (function (d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s); js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//   }, []);

//   const startFacebookStream = async () => {
//     try {
//       // Make the API call to create a live video
//       FB.api(
//         `/${USER_ID}/live_videos`,
//         'POST',
//         {
//           broadcast_status: 'UNPUBLISHED',
//           title: 'My Live Video Title',
//           description: 'This is my live video description',
//           privacy: { value: 'EVERYONE' },
//         },
//         function (response) {
//           if (response && !response.error) {
//             console.log('Live video created:', response);
//           } else {
//             console.error('Error creating live video:', response.error);
//           }
//         }
//       );
//     } catch (error) {
//       console.error('Error starting Facebook Live stream:', error);
//     }
//   };
  

//   useEffect(() => {
//     if (isStreaming) {
//       if (flvjs.isSupported()) {
//         var videoElement = document.getElementById("videoElement");
//         var flvPlayer = flvjs.createPlayer({
//           type: "flv",
//           url: `http://localhost:8000/live/stream.flv${accessKey}`,
//         });
//         flvPlayer.attachMediaElement(videoElement);
//         flvPlayer.load();
//         flvPlayer.play();
//       }
//     }
//   }, [isStreaming, accessKey]);

//   const fetchUserLiveVideos = async () => {
//     try {
//       const response = await axios.get("/user-live-videos", {
//         params: {
//           accessToken: accessKey,
//         },
//       });
//       setLiveVideos(response.data.liveVideos);
//     } catch (error) {
//       console.error("Error fetching user's live videos:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Stream Page</h2>
//       {isStreaming ? (
//         <div>
//           <p>Access Key: {accessKey}</p>
//           <video id="videoElement" controls autoPlay></video>
//           <button onClick={stopStream}>Stop Stream</button>
//         </div>
//       ) : (
//         <button onClick={startStream}>Start Stream</button>
//       )}
//       <button onClick={startFacebookStream}>Start Facebook Stream</button>
//       <button onClick={fetchUserLiveVideos}>Fetch User's Live Videos</button>
//       {liveVideos.map((video) => (
//         <div key={video.id}>
//           <p>Title: {video.title}</p>
//           {/* Display other video details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StreamPage;



