import fire from './assets/fire-type.png'
import bug from './assets/bug-type.png'
import flying from './assets/flying-type.png'
import grass from './assets/grass-type.png'
import normal from './assets/normal-type.png'
import poison from './assets/poison-type.png'
import water from './assets/water-type.png'

const pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    entry:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    imageURL: "https://cdn2.bulbagarden.net/upload/2/21/001Bulbasaur.png",
    next: 2,
    typeTags: [<img id="grass" src={grass} alt="grass type" />,<img id="poison" src={poison} alt="poison type" />],
  },
  {
    id: 2,
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    entry:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    imageURL: "https://cdn2.bulbagarden.net/upload/7/73/002Ivysaur.png",
    next: 3,
    pre: 1,
    typeTags: [<img id="grass" src={grass} alt="grass type" />,<img id="poison" src={poison} alt="poison type" />],
  },
  {
    id: 3,
    name: "Venusaur",
    type: ["Grass", "Poison"],
    entry:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    pre: 2,
    typeTags: [<img id="grass" src={grass} alt="grass type" />,<img id="poison" src={poison} alt="poison type" />],
  },
  {
    id: 4,
    name: "Charmander",
    type: ["Fire"],
    entry:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    imageURL: "https://cdn2.bulbagarden.net/upload/7/73/004Charmander.png",
    next: 5,
    typeTags: [<img id="fire" src={fire} alt="fire type" />],
  },
  {
    id: 5,
    name: "Charmeleon",
    type: ["Fire"],
    entry:
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    imageURL:
      "https://i.pinimg.com/originals/9e/fe/f7/9efef7d233a80b4ba49bc90baadcb912.png",
    next: 6,
    pre: 4,
    typeTags: [<img id="fire" src={fire} alt="fire type" />],
  },
  {
    id: 6,
    name: "Charizard",
    type: ["Fire", "Flying"],
    entry:
      "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    pre: 5,
    typeTags: [<img id="fire" src={fire} alt="fire type" />],
  },
  {
    id: 7,
    name: "Squirtle",
    type: ["Water"],
    entry:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    imageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
    next: 8,
    typeTags: [<img id="water" src={water} alt="water type" />],
  },
  {
    id: 8,
    name: "Wartortle",
    type: ["Water"],
    entry:
      "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    imageURL:
      "https://cdn2.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/500px-008Wartortle.png",
    pre: 7,
    next: 9,
    typeTags: [<img id="water" src={water} alt="water type" />],
  },

  {
    id: 9,
    name: "Blastoise",
    type: ["Water"],
    entry:
      "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    imageURL:
      "https://cdn2.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/500px-009Blastoise.png",
    pre: 8,
    typeTags: [<img id="water" src={water} alt="water type" />],
  },
  {
    id: 10,
    name: "Caterpie",
    type: ["Bug"],
    entry:
      "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
    imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    next: 11,
    typeTags: [<img id="bug" src={bug} alt="bug type" />],
  },
  {
    id: 11,
    name: "Metapod",
    type: ["Bug"],
    entry:
      "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
    imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    pre: 10,
    next: 12,
    typeTags: [<img id="bug" src={bug} alt="bug type" />],
  },
  {
    id: 12,
    name: "Butterfree",
    type: ["Bug", "Flying"],
    entry:
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    imageURL:
      "https://cdn2.bulbagarden.net/upload/thumb/d/d1/012Butterfree.png/1200px-012Butterfree.png",
    pre: 11,
    typeTags: [<img id="bug" src={bug} alt="bug type" />,<img id="flying" src={flying} alt="flying type" />],
  },
  {
    id: 13,
    name: "Weedle",
    type: ["Bug", "Poison"],
    entry:
      "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
    imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    next: 14,
    typeTags: [<img id="bug" src={bug} alt="bug type" />,<img id="poison" src={poison} alt="poison type" />],
  },
  {
    id: 14,
    name: "Kakuna",
    type: ["Bug", "Poison"],
    entry:
      "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    pre: 13,
    next: 15,
    typeTags: [<img id="bug" src={bug} alt="bug type" />,<img id="poison" src={poison} alt="poison type" />],
  },
  {
    id: 15,
    name: "Beedrill",
    type: ["Bug", "Poison"],
    entry:
      "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    imageURL:
      "https://cdn2.bulbagarden.net/upload/thumb/6/61/015Beedrill.png/1200px-015Beedrill.png",
    pre: 14,
    typeTags: [<img id="bug" src={bug} alt="bug type" />,<img id="poison" src={poison} alt="poison type" />],
  },
  {
    id: 16,
    name: "Pidgey",
    type: ["Normal", "Flying"],
    entry:
      "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    imageURL: "https://cdn2.bulbagarden.net/upload/5/55/016Pidgey.png",
    next: 17,
    typeTags: [<img id="normal" src={normal} alt="normal type" />,<img id="flying" src={flying} alt="flying type" />],
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: ["Normal", "Flying"],
    entry:
      "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
    imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    pre: 16,
    next: 18,
    typeTags: [<img id="normal" src={normal} alt="normal type" />,<img id="flying" src={flying} alt="flying type" />],
  },
  {
    id: 18,
    name: "Pidgeot",
    type: ["Normal", "Flying"],
    entry:
      "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
    imageURL:
      "https://cdn2.bulbagarden.net/upload/thumb/5/57/018Pidgeot.png/1200px-018Pidgeot.png",
    pre: 17,
    typeTags: [<img id="normal" src={normal} alt="normal type" />,<img id="flying" src={flying} alt="flying type" />],
  },
];

export default pokemon;
