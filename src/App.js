import React, { useState, useEffect, useRef } from 'react';
import styles from './App.module.css'


const App = () => {
    const [ isStreaming, setIsStreaming ] = useState(false);
    const [ mediaStream, setMediaStream ] = useState(null);

    const videoRef = useRef();
    const constraints = {
        audio: false,
        video: true,
    };

    useEffect(() => {
        if (!isStreaming) return;

        const startStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                setMediaStream(stream);
            } catch (err) {
                stopStream();
            }
        };

        const stopStream = () => {
            mediaStream.getTracks().forEach(track => {
                track.stop();
            });
        };

        if (!mediaStream) {
            startStream();
        } else {
            return () => {
                stopStream();
            }
        }
    }, [ mediaStream, isStreaming, constraints ]);


    const handleStartTranslationClick = () => {
        setIsStreaming(true);
        if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
            videoRef.current.srcObject = mediaStream;
        }
    };

    const handleStopTranslationClick = () => {
        mediaStream.getTracks().forEach(track => {
            track.stop();
        });
    };

    return (
        <div className={styles.wrap}>
            <video
                ref={videoRef}
                width="640px"
                height="480px"
                autoPlay
            />
            <div>
                <button onClick={handleStartTranslationClick}>
                    Start
                </button>
                <button onClick={handleStopTranslationClick}>
                    Stop
                </button>
            </div>
        </div>
    );
};


export default App;
