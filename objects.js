var playlist = { objects: 'object'};
function updatePlayList(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist; 
}
 