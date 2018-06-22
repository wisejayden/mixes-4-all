import React from 'react';
import UploadMix from './UploadMix.js'
import UploaderModal from './UploaderModal.js';



const Header = (props) => {
    return(
        <div id="header">
            <header className="App-header">
            <UploadMix uploaderModalVisibleFunction={props.uploaderModalVisibleFunction} uploaderModalVisible={props.uploaderModalVisible}/>

            {props.uploaderModalVisible &&
                <UploaderModal findFieldValue={props.findFieldValue} uploadInput={props.uploadInput}
                uploadSubmit={props.uploadSubmit}/>
            }
              <h1 className="App-title">Mix-It-Up</h1>
            </header>
        </div>
    )
};


export default Header
