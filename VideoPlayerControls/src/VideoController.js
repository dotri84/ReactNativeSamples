import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, TouchableOpacity, View, Dimensions} from "react-native";
import Style from './Style';
import Video from 'react-native-video';

class VideoController extends Component {
  player: Video;

static_width = Dimensions.get('window').width


  render() {
       return (
        <Video
        source={require('../broadchurch.mp4')}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       rate={1.0}                              // 0 is paused, 1 is normal.
       volume={1.0}                            // 0 is muted, 1 is normal.
       muted={false}                           // Mutes the audio entirely.
       paused={false}                          // Pauses playback entirely.
       resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
       repeat={true}                           // Repeat forever.
       playInBackground={false}                // Audio continues to play when app entering background.
       playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
       progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
       style={[Style.backgroundVideo, {width: static_width, height: 120}]} />
       )
  }
}


AppRegistry.registerComponent('VideoPlayerControls', () => VideoController);