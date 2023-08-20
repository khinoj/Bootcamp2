// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: 'Hotel California',
  artist: 'Eagles',
  album: 'Legacy',
  style: 'rock',
 
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `This song is ${music.title} from the ${music.artist} and is from the album ${music.album} and is consider ${music.style}`;

console.log(songSnippet)
