export async function GetMyPokemons() {
  return localStorage.getItem("my-pokemon")
    ? JSON.parse(localStorage.getItem("my-pokemon"))
    : [];
}

export function UpdateMyPokemons(mypokemons) {
  localStorage.setItem("my-pokemon", JSON.stringify(mypokemons));
}
