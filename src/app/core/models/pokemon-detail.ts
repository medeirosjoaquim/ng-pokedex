export interface PokemonDetail {
  abilities: Ability[];
  height: number;
  weight: number;
  moves: Move[];
  name?: string;
  sprites?: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string
  };
}

interface Ability {
    ability: {
      name: string,
      url: string
    };
    is_hidden: boolean;
    slot: number;
}

interface Move {
  name: string;
  url: string;
}
