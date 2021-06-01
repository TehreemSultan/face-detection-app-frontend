import React from 'react';
import './faceRecognition.css';

const FaceRecognition = ({box:{leftCol,topRow,rightCol,bottomRow},imageUrl}) => {
    return (
        <div className="center">
            <div className="absolute mt2">
            <img id="inputImage" width="500px" height="auto" alt="" src={imageUrl}/>
            <div className="bounding-box"
            style={{top:topRow, right:rightCol, bottom:bottomRow, left:leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition
