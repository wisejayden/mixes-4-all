import React, { Component } from 'react';

const UploadMix = (props) => {
    console.log("uploadMix component", props.uploadModalVisible);
    return(
        <div id="UploadMix">
            {!props.uploaderModalVisible &&
                <img onClick={props.uploaderModalVisibleFunction} id="upload-add"src="/images/addwhite.png" />
            }

        </div>
    )
}

export default UploadMix
