/**
 * Recebe url e encontra o id do pokemon
 */

function getId(url: string) {
  const matchPokemonId = /(pokemon\/)(\d{0,3})/gm;
  const matches = matchPokemonId.exec(url);
  const getIdFromUrl = matches[2];
  return getIdFromUrl;
}
export const mapWithId = (obj: { name: string, url: string }) => ({ ...obj, id: getId(obj.url) });
