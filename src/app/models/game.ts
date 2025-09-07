export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image?: string;
  rating_top: number;
  platforms: {
    platform: Platform;
    released_at: string;
  }[];
  genres: Genre[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}
