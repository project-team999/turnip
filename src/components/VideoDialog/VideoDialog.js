import React, { useLable, useState } from 'react'
import './css/dialog.css'
import video from '../../public/video/home.mp4'


const VideoDialog = props => {


    let [flag, setFlag] = useState(true)
    let { dialogflag, handleClose } = props;

    const handleMouseOver = () => {

    }
    const handleMouseOut = () => {

    }

    const handleFalse = (e) => {

        e.stopPropagation();
        handleClose(111);

    }

    return (
        <div className={`video-dialog-wrapper ${dialogflag ? 'active' : ''}`}>
            <div className="viedo-wrapper">
                <div onClick={(e) => handleFalse(e)} className={`close ${flag ? 'active' : ''}`} >&times;</div>
                <video
                    onMouseOut={() => handleMouseOut()}
                    onMouseOver={() => handleMouseOver()}
                    src={require('../../public/video/home.mp4')} controls="controls">
                </video>
            </div>
        </div>
    )

}

export default VideoDialog;