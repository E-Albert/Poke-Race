let pokeQuestions = [
  {
    title: "What type of Pokemon is Squirtle?",
    choices: ["Fairy", "Water", "Grass", "Normal"],
    answer: "Water",
  },
  {
    title: "Who was Ash's starter Pokemon?",
    choices: ["Pikachu", "Geodude", "Charmander", "Caterpie"],
    answer: "Pikachu",
  },
  {
    title: "Which Pokemon has a burning tail?",
    choices: ["Charmander", "Weedle", "Pidgey", "Vulpix"],
    answer: "Charmander",
  },
  {
    title: "Which of the following is Grass type Pokemon?",
    choices: ["Jigglypuff", "Dugtrio", "Vileplume", "Machoke"],
    answer: "Vileplume",
  },
  {
    title: "Who is the partner of Jesse from Team Rocket?",
    choices: ["Cylde", "Samantha", "Deeno", "James"],
    answer: "James",
  },
  {
    title: "Which member of team rocket also acts as a translator?",
    choices: ["Brock", "Meowth", "Misty", "Slowbro"],
    answer: "Meowth",
  },
  {
    title: "Where is Ash Ketchum from?",
    choices: ["Cerulean City", "Pallet Town", "Fuchsia City", "Indigo Plateau"],
    answer: "Pallet Town",
  },
  {
    title: "Kadabra evolves into?",
    choices: ["Abra", "Poliwrath", "Bellsprout", "Alakazam"],
    answer: "Alakazam",
  },
  {
    title: "How many types of Pokemon are there?",
    choices: ["18", "20", "21", "16"],
    answer: "18",
  },
  {
    title: "How does Pikachu evolve into Raichu?",
    choices: [
      "In a sandstorm",
      "During the night time",
      "With a Thunderstone",
      "With a Moonstone",
    ],
    answer: "With a Thunderstone",
  },
  {
    title: "How many arms does Machamp have?",
    choices: ["4", "6", "2", "3"],
    answer: "4",
  },
  {
    title: "How can you break a Ditto's disguise?",
    choices: [
      "Defeat it in battle",
      "Give it a berry",
      "You can't",
      "Make it laugh",
    ],
    answer: "Make it laugh",
  },
  {
    title:
      "What do you need to travel from Vermilion City to One, Two, and Three Islands?",
    choices: ["A Super Rod", "An S.S Ticket", "A Tri-Pass", "A Card Key"],
    answer: "A Tri-Pass",
  },
  {
    title: "Which two towns are connected by the Cycling Road?",
    choices: [
      "Vermilion City and Saffron City",
      "Fuschia City and Vermilion City",
      "Fuschia City and Celadon City",
      "Saffron City and Celadon City",
    ],
    answer: "Fuschia City and Celadon City",
  },
  {
    title: "Which town is Koga the Gym Leader of?",
    choices: ["Lavender Town", "Fuschia City", "Celadon City", "Cerulean City"],
    answer: "Fuschia City",
  },
  {
    title:
      "What item do you need to identify the ghost Pokemon in the Pokemon Tower in Lavender Town?",
    choices: [
      "A Key Card",
      "A Basement Key",
      "A Silph Scope",
      "A Yellow Flute",
    ],
    answer: "A Silph Scope",
  },
  {
    title: "Victory Road is actually not a road. What is it?",
    choices: [
      "A Mountain",
      "A Cave",
      "The Gates that lead to the Indigo Plateau",
      "The question is wrong",
    ],
    answer: "A Cave",
  },
  {
    title: "What does Vulpix evolve into?",
    choices: ["Ninetales", "Geodude", "Raichu", "Mankey"],
    answer: "Ninetales",
  },
  {
    title: "What was the first Pokemon caught by Ash Ketchum?",
    choices: ["Caterpie", "Pikachu", "Clefairy", "Magikarp"],
    answer: "Caterpie",
  },
  {
    title: "What is the most common type of Pokemon?",
    choices: ["Fire", "Ice", "Grass", "Water"],
    answer: "Water",
  },
  {
    title:
      "How many Gym Badges must a trainer collect before challenging the Elite Four?",
    choices: ["6", "8", "12", "13"],
    answer: "8",
  },
  {
    title: "Which type of attack is super effective against water types?",
    choices: ["Ice", "Ground", "Fire", "Grass"],
    answer: "Grass",
  },
  {
    title: "Green is the predominant color for what type?",
    choices: ["Flying", "Grass", "Rock", "Water"],
    answer: "Grass",
  },
  {
    title: "Which of the following is a Fairy Pokemon?",
    choices: ["Zubat", "Clefairy", "Sandslash", "Vulpix"],
    answer: "Clefairy",
  },
  {
    title: "Espeon is what type of Pokemon?",
    choices: ["Ghost", "Ground", "Psychic", "Electric"],
    answer: "Psychic",
  },
  {
    title: "Which Pokemon evolves into Arbok",
    choices: ["Nidorina", "Nidoran", "Ekans", "Nidoqueen"],
    answer: "Ekans",
  },
  {
    title: "Who wants to be the best Pokemon Master ever?",
    choices: ["Paul", "Ash", "Dawn", "Brock"],
    answer: "Ash",
  },
  {
    title: "Which green Pokemon evolves into Ivysaur?",
    choices: ["Bulbasaur", "BellSprout", "Oddish", "Scyther"],
    answer: "Bulbasaur",
  },
  {
    title: "Which of the following is a specialist Rock type trainer?",
    choices: ["James", "Ash", "Misty", "Brock"],
    answer: "Brock",
  },
  {
    title: "The R on the Team Rocket costume is what color?",
    choices: ["Red", "Yellow", "Pink", "Orange"],
    answer: "Red",
  },
  {
    title: "What type of Pokemon is Rattata?",
    choices: ["Ice", "Ghost", "Normal", "Fairy"],
    answer: "Normal",
  },
  {
    title: "What type of Pokemon are mainly yellow?",
    choices: ["Flying", "Grass", "Electric", "Water"],
    answer: "Electric",
  },
  {
    title: "What species is Pikachu?",
    choices: ["Rat", "Mouse", "Hamster", "Gerbil"],
    answer: "Mouse",
  },
  {
    title: "Which of the following is a Dark type Pokemon",
    choices: ["Politoed", "Espeon", "Aipom", "Umbreon"],
    answer: "Umbreon",
  },
  {
    title: "Which of the following is a Poison type Pokemon",
    choices: ["Raichu", "Ekans", "Sandslash", "Raticate"],
    answer: "Ekans",
  },
  {
    title: "Who is the leader of Team Rocket?",
    choices: ["Giovanni", "Luigi", "Mario", "Guiseppe"],
    answer: "Giovanni",
  },
  {
    title: "Which Pokemon evolves into Dugtrio?",
    choices: ["Diglott", "Diglett", "Digsitt", "Diglatt"],
    answer: "Diglett",
  },
  {
    title: "How many original Pokemon were there?",
    choices: ["131", "161", "141", "151"],
    answer: "151",
  },
  {
    title:
      "What does the winning Pokemon get at the end of a toughness contest?",
    choices: ["Stone", "Rosette", "Badge", "Ribbon"],
    answer: "Ribbon",
  },
  {
    title: "Which of the following Pokemon types doesn't exist?",
    choices: ["Glass", "Dragon", "Fairy", "Ice"],
    answer: "Glass",
  },
  {
    title: 'Fill in the blank. "I want to be _____"',
    choices: [
      "Amazing",
      "The ultimate Pokemon catcher",
      "The very best",
      "Pikachu's best friend",
    ],
    answer: "The very best",
  },
  {
    title: "How many evolutions does Eevee have?",
    choices: ["2", "4", "6", "8"],
    answer: "8",
  },
  {
    title: "Which Pokemon is Misty's main Pokemon?",
    choices: ["Staryu", "Ekans", "Pikachu", "Togepi"],
    answer: "Staryu",
  },
  {
    title: "What is Squirtle's final evolution?",
    choices: ["Ivysaur", "Blastoise", "Wartortle", "Bulbasaur"],
    answer: "Blastoise",
  },
  {
    title: "How old is Ash in the beginning of the series?",
    choices: ["5", "12", "15", "10"],
    answer: "10",
  },
  {
    title: "How many types of Pokeballs are there?",
    choices: ["4", "13", "20", "27"],
    answer: "27",
  },
  {
    title: "Whos is Ash's rival?",
    choices: ["Brock", "Gary", "Chris", "Ashley"],
    answer: "Gary",
  },
  {
    title: "What does Pokemon mean?",
    choices: ["Pocket monsters", "Nothing", "Little creatures", "Element animals"],
    answer: "Pocket monsters",
  },
  {
    title: "What Pokemon doesn't have eyes?",
    choices: ["Caterpie", "Jinx", "Zubat", "Ponyta"],
    answer: "Zubat",
  },
  {
    title: "Where does Pokemon originate from?",
    choices: ["China", "America", "Austrailia", "Japan"],
    answer: "Japan",
  },
];

export default pokeQuestions;
