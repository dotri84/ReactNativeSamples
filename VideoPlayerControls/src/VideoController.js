import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, TouchableOpacity, View, Dimensions,Image, TouchableHighlight} from "react-native";
import Style from './Style';
import Video from 'react-native-video';

let width = Dimensions.get('window').width;
let height = width / 1280.0 * 720
const PlayIcon = require('../assets/images/play@3x.png');
const PauseIcon = require('../assets/images/pause@3x.png');
let isAutoPlay = false

class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('../assets/images/bg@2x.png')}
                  style={Style.backgroundImage}>
                  {this.props.children}
            </Image>
        )
    }
}

class VideoController extends Component {
  player: Video;
  constructor(props) {
        super(props);
        this.state = { 
            autoplay: isAutoPlay,
            paused: true,
            playpause_imageuri: isAutoPlay ? PauseIcon : PlayIcon
        };
    }
  render() {
       return (
         <BackgroundImage>
            <View style={Style.mainContainer}>
                  <View style={Style.toolbar}>
                      <Text style={Style.toolbarButton}>Add</Text>
                      <Text style={Style.toolbarTitle}>This is the title</Text>
                      <Text style={Style.toolbarButton}>Like</Text>
                  </View>
                <View style={Style.content}>
                <Video
                      source={require('../broadchurch.mp4')}   // Can be a URL or a local file.
                    ref={(ref) => {
                      this.player = ref
                    }}                                      // Store reference
                    rate={this.state.autoplay ? 1 : 0}                              // 0 is paused, 1 is normal.
                    volume={1.0}                            // 0 is muted, 1 is normal.
                    muted={false}                           // Mutes the audio entirely.
                    paused={this.state.paused}              
                    resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                    repeat={true}                           // Repeat forever.
                    playInBackground={false}                // Audio continues to play when app entering background.
                    playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                    progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                    style={[Style.backgroundVideo, {width: width, height: height}]} />
                    <View style={Style.controls}>
                        <TouchableOpacity style={Style.playButton} onPress={this._onPlayPress.bind(this)}>
                            <Image
                                style={Style.playImage}
                                source={this.state.playpause_imageuri}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </BackgroundImage>
       )
  }

  _onPlayPress() {
      this.setState({autoplay: true, paused: !this.state.paused})
      if (this.state.paused) {
          this.setState({playpause_imageuri: PauseIcon});
      }
      else {
          this.setState({playpause_imageuri: PlayIcon});
      }
  }
}


AppRegistry.registerComponent('VideoPlayerControls', () => VideoController);