var playlist = { objects: 'object'};
function updatePlayLost(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist; 
}
 