export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  durationSec: number;
  category: string;
  spotifyUrl: string;
  coverGradient: string;
  audioUrl: string;
}

export const playlist: Track[] = [
  {
    id: 'track-01',
    title: 'Akhiyan',
    artist: 'Harkirat Sangha',
    duration: '3:05',
    durationSec: 185,
    category: 'VIBES',
    spotifyUrl: 'https://open.spotify.com/search/Akhiyan%20Harkirat%20Sangha',
    coverGradient: 'from-blue-600 to-indigo-900',
    audioUrl: '/audio/track-01.mp3',
  },
  {
    id: 'track-02',
    title: 'Come and See Me',
    artist: 'Drake & PARTYNEXTDOOR',
    duration: '3:55',
    durationSec: 235,
    category: 'LATE NIGHT R&B',
    spotifyUrl: 'https://open.spotify.com/search/Come%20and%20See%20Me%20Drake',
    coverGradient: 'from-[#FF1A1A] to-purple-950',
    audioUrl: '/audio/track-02.mp3',
  },
  {
    id: 'track-03',
    title: 'Break Da Law',
    artist: '21 Savage',
    duration: '2:57',
    durationSec: 177,
    category: 'TRAP / BUILDER',
    spotifyUrl: 'https://open.spotify.com/search/Break%20Da%20Law%2021%20Savage',
    coverGradient: 'from-emerald-600 to-teal-950',
    audioUrl: '/audio/track-03.mp3',
  },
  {
    id: 'track-04',
    title: 'Do I Wanna Know?',
    artist: 'Arctic Monkeys',
    duration: '4:32',
    durationSec: 272,
    category: 'INDIE ROCK',
    spotifyUrl: 'https://open.spotify.com/search/Do%20I%20Wanna%20Know%20Arctic%20Monkeys',
    coverGradient: 'from-neutral-700 to-zinc-950',
    audioUrl: '/audio/track-04.mp3',
  },
  {
    id: 'track-05',
    title: 'Pokémon Theme',
    artist: 'Pokémon Anthem',
    duration: '3:15',
    durationSec: 195,
    category: 'ANTHEM',
    spotifyUrl: 'https://open.spotify.com/search/Pokemon%20Theme%20Song',
    coverGradient: 'from-red-600 to-yellow-600',
    audioUrl: '/audio/track-05.mp3',
  },
  {
    id: 'track-06',
    title: '48 Rhymes',
    artist: 'Karan Aujla',
    duration: '2:48',
    durationSec: 168,
    category: 'PUNJABI / HIP-HOP',
    spotifyUrl: 'https://open.spotify.com/search/48%20Rhymes%20Karan%20Aujla',
    coverGradient: 'from-amber-600 to-red-900',
    audioUrl: '/audio/track-06.mp3',
  },
];
