interface Artist {
  id: number;
  name: string;
}
interface Beat {
  id: number;
  name: string;
  bpm: number;
  artist: Artist;
  mp3: string;
  wave: string;
  wrap: string;

  downloads: number;
  listenings: number;
}
