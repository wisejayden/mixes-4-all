import React from 'react';

const UploaderModal = (props) => {
    return (
        <div id="UploaderModal">
            <p>Embed Link</p>
            <input name="upload-input" onChange={props.findFieldValue} value={props.uploadInput}/>
            <p>Title</p>
            <input name="upload-title" onChange={props.findFieldValue} value={props.uploadTitle} />
            <p>Playlist</p>
            <input name="upload-playlist" onChange={props.findFieldValue} value={props.uploadPlaylist} />
            <button id="add-mix-button" onClick={props.uploadSubmit}>Add Mix</button>
        </div>
    )
}

export default UploaderModal
