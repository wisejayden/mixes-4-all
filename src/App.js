import React, { Component } from 'react';
import Header from './components/Header.js';
import UploadMix from './components/UploadMix.js';
import UploaderModal from './components/UploaderModal.js';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            uploaderModalVisible: false,
            uploadInput: '',
            uploadPlaylist: '',
            uploadTitle: '',
            userMixes: []
        };
        this.uploaderModalVisibleFunction = this.uploaderModalVisibleFunction.bind(this);
        this.findFieldValue = this.findFieldValue.bind(this);
        this.uploadSubmit = this.uploadSubmit.bind(this);
        this.getUserMixes = this.getUserMixes.bind(this);
    }
    uploaderModalVisibleFunction() {
        if(!this.state.uploaderModalVisible) {
            this.setState({
                uploaderModalVisible: true
            })
        }
        console.log("state", this.state);
    }
    findFieldValue(e) {
        if(e.target.name === 'upload-input') {
            this.setState({
                uploadInput: e.target.value
            })
        }
        if(e.target.name === 'upload-playlist') {
            this.setState({
                uploadPlaylist: e.target.value
            })
        }
        if(e.target.name === 'upload-title') {
            this.setState({
                uploadTitle: e.target.value
            })
        }
    }
    uploadSubmit() {
        if(this.state.uploadInput){
            let content = this.state.uploadInput.replace('width="560"', 'width="200"');
            content = content.replace('height="315"', 'height="200"');
            content = content.replace('height="300"', 'height="200"');
            content = content.replace('width="100%"', 'width="200"')

            axios.post('/upload', {
                upload: content,
                title: this.state.uploadTitle,
                playlist: this.state.uploadPlaylist
            })
            .then(res => {
                console.log("MIX POSTED?!");
                this.setState({
                    upload: '',
                    title: '',
                    playlist: ''
                })
                this.getUserMixes();
            })
        }
    }
    getUserMixes() {
        console.log("Getting all user mixes...");
        axios.get("/getusermixes")
        .then(res => {
            const userMixes = res.data.results;
            console.log("usermixes", userMixes);
            this.setState({userMixes})
        })
    }
    componentDidMount() {
        this.getUserMixes();
    }
  render() {
    return (
            <div className="App">
                <Header uploaderModalVisibleFunction={this.uploaderModalVisibleFunction} uploaderModalVisible={this.state.uploaderModalVisible}
                findFieldValue={this.findFieldValue} uploadInput={this.state.uploadInput}
                uploadSubmit={this.uploadSubmit}
                />

                <div className="user-mixes-container">
                    {this.state.userMixes.map(mix =>
                        <div key={mix.id}>
                        <div>{ ReactHtmlParser(mix.upload) }</div>

                        </div>
                    )}
                </div>
            </div>

    );
  }
}
