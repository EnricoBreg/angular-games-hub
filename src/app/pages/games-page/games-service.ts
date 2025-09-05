import { Injectable } from '@angular/core';
import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  getGames(): Game[] {
    const games: Game[] = [
      {
        id: 1,
        title: 'The Legend of Zelda: Breath of the Wild',
        genre: 'Action-adventure',
        releaseDate: '2017-03-03',
        rating: 9.5,
        description:
          'An open-world adventure game set in the land of Hyrule. You play as Link, who awakens from a long slumber to defeat Calamity Ganon and save Princess Zelda.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 2,
        title: 'God of War',
        genre: 'Action-adventure',
        releaseDate: '2018-04-20',
        rating: 9.3,
        description:
          'A mythological adventure featuring Kratos and his son Atreus. Explore the Norse realms and battle gods and monsters. A deeply emotional story about fatherhood and redemption.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 3,
        title: 'Red Dead Redemption 2',
        genre: 'Action-adventure',
        releaseDate: '2018-10-26',
        rating: 9.7,
        description:
          'An epic tale of life in America at the dawn of the modern age. You play as Arthur Morgan, an outlaw and member of the Van der Linde gang.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 4,
        title: 'The Witcher 3: Wild Hunt',
        genre: 'RPG',
        releaseDate: '2015-05-19',
        rating: 9.6,
        description:
          'A story-driven open world RPG set in a visually stunning fantasy universe. You play as Geralt of Rivia, a monster hunter searching for his missing adopted daughter.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 5,
        title: 'Minecraft',
        genre: 'Sandbox',
        releaseDate: '2011-11-18',
        rating: 9.0,
        description:
          'A sandbox game that allows players to build and explore their own worlds made of blocks. It features various modes including survival, creative, and adventure.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 6,
        title: 'Fortnite',
        genre: 'Battle Royale',
        releaseDate: '2017-07-21',
        rating: 8.5,
        description:
          'A battle royale game where 100 players fight to be the last one standing. It features building mechanics, various weapons, and regular updates with new content.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 7,
        title: 'Overwatch',
        genre: 'First-person shooter',
        releaseDate: '2016-05-24',
        rating: 8.8,
        description:
          'A team-based multiplayer first-person shooter featuring a diverse cast of heroes, each with unique abilities and roles. Players work together to complete objectives and win matches.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 8,
        title: 'Apex Legends',
        genre: 'Battle Royale',
        releaseDate: '2019-02-04',
        rating: 8.7,
        description:
          'A free-to-play battle royale game set in the Titanfall universe. Players form squads of three and choose from a roster of unique characters, each with their own abilities.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 9,
        title: 'Cyberpunk 2077',
        genre: 'RPG',
        releaseDate: '2020-12-10',
        rating: 7.5,
        description:
          'An open-world RPG set in the dystopian Night City. Players take on the role of V, a mercenary with customizable cybernetic enhancements, navigating a world filled with crime and corruption.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
      {
        id: 10,
        title: 'Hades',
        genre: 'Roguelike',
        releaseDate: '2020-09-17',
        rating: 9.2,
        description:
          'A roguelike dungeon crawler where you play as Zagreus, the son of Hades, trying to escape the Underworld. The game features fast-paced combat, a rich narrative, and a unique art style.',
        backgroundImage: 'https://picsum.photos/400/300',
      },
    ];

    return games;
  }
}
