import Sound from 'react-native-sound';

Sound.setCategory('Ambient', true);

const buttonPress = new Sound(require('bruh.mp3'), error => console.log(error));
export const playButtonPress = () => {
  buttonPress.play((success) => buttonPress.reset());
}

const playListPull = new Sound(require('bruh.mp3'), error => console.log(error));
export const playListPull = () => {
  pull.play((success) => pull.reset());
}

const playListPullFinished = new Sound(require('bruh.mp3'), error => console.log(error));
export const playListPullFinished = () => {
  pullFinished.play((success) => pullFinished.reset());
}