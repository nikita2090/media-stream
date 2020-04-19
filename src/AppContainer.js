import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css'

import { receiveStream } from './reduxInfrostructure/action-creators';


const App = ({ stream, receiveStreamAction }) => {
    const [ isStreaming, setIsStreaming ] = useState(false);

    const videoRef = useRef();
    const constraints = {
        audio: false,
        video: true,
    };

    useEffect(() => {
        if (!isStreaming) return;

        const startStream = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
                receiveStreamAction(mediaStream);
            } catch (err) {

            }
        };

        if (!stream) {
            startStream();
        } else {
            return () => {

            }
        }
    }, [ stream, isStreaming, constraints, receiveStreamAction ]);


    const handleStartTranslationClick = () => {
        setIsStreaming(true);
        if (stream && videoRef.current && !videoRef.current.srcObject) {
            videoRef.current.srcObject = stream;
        }
    };

    const handleStopTranslationClick = () => {
        stream.getTracks().forEach(track => {
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
                <button onClick={handleStartTranslationClick}>Start</button>
                <button onClick={handleStopTranslationClick}>Stop</button>
            </div>
        </div>
    );
};


const mapStateToProps = ({ streamReducer: { stream } }) => ({
    stream,
});

const mapDispatchToProps = {
    receiveStreamAction: receiveStream,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
