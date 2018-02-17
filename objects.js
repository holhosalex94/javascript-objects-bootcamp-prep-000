var playlist = { objects: 'object'};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist; 
}
function removePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist; 
}
 