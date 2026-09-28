let current = 0;
let step = -1;

let startIndex = 0;
let endIndex = 0;

/* =======================
   YOUR DATA (keep all 30 here)
======================= */

let data = [

{
    "name": "Spider-Man",
    "image": "images/spiderman.jpg",
    "clues": [
      "Climbs walls like a lizard",
      "Shoots sticky webs",
      "School + hero life",
      "Wears red mask",
      "Friendly neighborhood hero"
    ]
  },
  {
    "name": "Iron Man",
    "image": "images/ironman.jpg",
    "clues": [
      "Very smart and rich",
      "Builds cool suits",
      "Has AI friend",
      "Flies in armor",
      "I am Iron Man"
    ]
  },
 {
    "name": "Sagar Ba",
    "image": "images/sagar.jpg",
    "clues": [
      "I fix wifi faster than superheroes",
      "I am Nepali babu",
      "If I stare at someone, they know I am angry",
      "Kids think I am very good at maths",
      "Rian only scared of me"
    ]
 },
  {
    "name": "Captain America",
    "image": "images/captainamerica.jpg",
    "clues": [
      "Loves his country",
      "Throws shield",
      "Super soldier",
      "Always does right",
      "First Avenger"
    ]
  },
  {
    "name": "Thor",
    "image": "images/thor.jpg",
    "clues": [
      "Has big hammer",
      "Controls lightning",
      "From another world",
      "Very strong",
      "God of Thunder"
    ]
  },
  {
    "name": "Hulk",
    "image": "images/hulk.jpg",
    "clues": [
      "Gets angry and big",
      "Very strong",
      "Green body",
      "Breaks things",
      "Hulk Smash"
    ]
  },
  {
    "name": "Black Panther",
    "image": "images/blackpanther.jpg",
    "clues": [
      "Wears black suit",
      "King of Wakanda",
      "Fast and strong",
      "Cat-like moves",
      "Wakanda Forever"
    ]
  },
  {
    "name": "Elsa",
    "image": "images/elsa.jpg",
    "clues": [
      "Makes ice",
      "Snow powers",
      "Princess",
      "Sings songs",
      "Let it go"
    ]
  },
  {
    "name": "Anna",
    "image": "images/anna.jpg",
    "clues": [
      "Loves her sister",
      "Very brave",
      "No powers",
      "Goes on adventure",
      "Frozen"
    ]
  },
  {
    "name": "Mickey Mouse",
    "image": "images/mickey.jpg",
    "clues": [
      "Big round ears",
      "Always smiling",
      "Disney world",
      "Best friends",
      "Disney mascot"
    ]
  },
  {
    "name": "Donald Duck",
    "image": "images/donald.jpg",
    "clues": [
      "Always angry voice",
      "Wears blue",
      "Lives with Mickey",
      "Funny duck",
      "Quack quack"
    ]
  },
  {
    "name": "Simba",
    "image": "images/simba.jpg",
    "clues": [
      "Lion king",
      "Runs away",
      "Comes back strong",
      "Jungle life",
      "Hakuna Matata"
    ]
  },
  {
    "name": "Nemo",
    "image": "images/nemo.jpg",
    "clues": [
      "Small fish",
      "Lost in ocean",
      "Dad finds him",
      "Swims a lot",
      "Just keep swimming"
    ]
  },
  {
    "name": "Lightning McQueen",
    "image": "images/mcqueen.jpg",
    "clues": [
      "Fast red car",
      "Loves racing",
      "Number 95",
      "Says ka-chow",
      "Cars movie"
    ]
  },
  {
    "name": "Buzz Lightyear",
    "image": "images/buzz.jpg",
    "clues": [
      "Space ranger",
      "Says infinity line",
      "Wears space suit",
      "Toy hero",
      "To infinity and beyond"
    ]
  },
  {
    "name": "Woody",
    "image": "images/woody.jpg",
    "clues": [
      "Cowboy toy",
      "Hat and boots",
      "Leader of toys",
      "Best friend Buzz",
      "Toy Story"
    ]
  },
  {
    "name": "Po",
    "image": "images/po.jpg",
    "clues": [
      "Big panda",
      "Loves food",
      "Learns kung fu",
      "Funny hero",
      "Dragon Warrior"
    ]
  },
  {
    "name": "Shrek",
    "image": "images/shrek.jpg",
    "clues": [
      "Green ogre",
      "Lives in swamp",
      "Looks scary",
      "Actually kind",
      "Donkey friend"
    ]
  },
  {
    "name": "Minions",
    "image": "images/minions.jpg",
    "clues": [
      "Small yellow",
      "Talk funny",
      "Wear goggles",
      "Love bananas",
      "Despicable Me"
    ]
  },
  {
    "name": "Pikachu",
    "image": "images/pikachu.jpg",
    "clues": [
      "Yellow mouse",
      "Electric power",
      "Says pika pika",
      "Cute and fast",
      "Pokemon"
    ]
  },
  {
    "name": "Mario",
    "image": "images/mario.jpg",
    "clues": [
      "Wears red cap",
      "Big mustache",
      "Jumps on enemies",
      "Saves princess",
      "Its a me Mario"
    ]
  },
  {
    "name": "Sonic",
    "image": "images/sonic.jpg",
    "clues": [
      "Runs very fast",
      "Blue color",
      "Spins while running",
      "Collects rings",
      "Speed hero"
    ]
  },
  {
    "name": "Doraemon",
    "image": "images/doraemon.jpg",
    "clues": [
      "Blue robot cat",
      "Comes from future",
      "Has magic pocket",
      "Helps a boy",
      "Doraemon"
    ]
  },
  {
    "name": "Shinchan",
    "image": "images/shinchan.jpg",
    "clues": [
      "Very naughty kid",
      "Funny dance",
      "Annoys parents",
      "Talks too much",
      "Shinchan"
    ]
  },
  {
    "name": "Ben 10",
    "image": "images/ben10.jpg",
    "clues": [
      "Has special watch",
      "Turns into aliens",
      "Fights villains",
      "Young hero",
      "Ben 10"
    ]
  },
{ name: "Ranbir Kapoor", image: "images/ranbir.jpg", clues: [
"Bhai ko GF lai pani chodega nahi",
"Pyar karta hoon… but long term nahi",
"I love Animal, I am Animal",
"Barfi hoon… ab sugar control mein hai",
"Rishi ko chora ma"
]},

{ name: "Balen Shah", image: "images/balen.jpg", clues: [
"Hijo samma chill, aaja sabai discipline",  
"Uncle haru tension, youth haru fan",
"Post aayo bhane sabai straight line ma", 
"Kala chasma lagaune bittikai power on",  
"Rap battle garne ho?"  
]},

{ name: "Tiger Shroff", image: "images/tiger.jpg", clues: [
"Hero ko chora ma, literally and figuratively",  
"Story bhanda flip important",
"Gravity sanga personal problem cha mero", 
"I am animal but I am not Ranbir",
"Flying Jatt jasto udera aaucha"
]},

{ name: "Madhuri Dixit", image: "images/madhuri.jpg", clues: [
"Smile wins hearts instantly",
"Dance owns the stage",
"90s had one queen",
"Numbers learned through songs",
"Dhak Dhak girl"
]},

{ name: "Prakash Saput", image: "images/prakash.jpg", clues: [
"Ramailo suru… last ma aansu",
"Gaana bhitra message compulsory",
"Galabandi gaye, khub naam kamaye",
"Internet le sabai viral banaidincha",
"Pir Paryo, tara Sakambari le"
]},

{ name: "Ajay Devgn", image: "images/ajay.jpg", clues: [
"Face neutral… duniya tension ma",
"Zubaan kesari",  
"Gaadi le gravity lai ignore garcha",  
"Bolna bhanda herna darr lagcha",  
"Singham entry = sabai sudhrinchan"  
]},

{ name: "Hari Bansha Acharya", image: "images/hari.jpg", clues: [
"I am 50% of Honey",
"I love Madan dai",
"Comedy with emotions - Hasaune suru… pachi ruwaucha",
"Desh le ragat maghe, kukhura ko bali chadau",
"Comedy bhitra life lesson free"
]},

{ name: "Salman Khan", image: "images/salman.jpg", clues: [
"I have stopped trying.",
"I am very busy on Rakchya Bandhan",
"I wish my brothers would do something except divorce",
"I am the Big boss",
"I am the original Bhai Jaan"
]},

{ name: "Karan Johar", image: "images/karan.jpg", clues: [
"Launching new faces is my hobby",
"I love coffee.",
"Nepotism ko godfather ho ma",
"SRK ko best friend",
"Coffee + rapid fire"
]},

{ name: "Rajesh Hamal", image: "images/hamal.jpg", clues: [
"Timi mero sathi bhaye garchu ma salam",
"Google le search garyo… confuse bhayo",
"ABC bolna sikhai deu bhancha tara mero English bhane cha hai fararaaaaa",
"Generation change… fan base same",
"Khalnayak hoina mahanayak"
]},

{ name: "Ranveer Singh", image: "images/ranveer.jpg", clues: [
"My wardrobe looks like color explosion",
"Quiet is not an option",
"Energy always maximum",
"Time already came long ago",
"Married Mastani"
]},

{ name: "KP Sharma Oli", image: "images/oli.jpg", clues: [
"Father of half of Nepal",
"This is gaida, not hippopotumus",
"Long talks, short clarity",
"Jokes appear suddenly",
"Gas ko pipe - ghar ghar ma"
]},

{ name: "Aamir Khan", image: "images/aamir.jpg", clues: [
"I love to Marry, Marry, Marry",
"I want AC directly in my face when it's hot.",
"Isan ko favourite teacher",
"Learning never stops",
"Mr Perfectionist"
]},

{ name: "Anmol KC", image: "images/anmol.jpg", clues: [
"I love Jerry, but not with tea",
"Script change huncha tara not my hair style.",
"Looks doing most of the work",
"Result doesn’t matter",
"Nepali heartthrob"
]},

{ name: "Shah Rukh Khan", image: "images/srk.jpg", clues: [
"I don’t walk… I enter in slow motion",
"Physics fails when romance starts",
"Ladki bhaagti hai, main platform pe ready",
"Switzerland ka unofficial ambassador",
"Rahul… naam toh suna hi hoga"
]},

{ name: "Sunny Deol", image: "images/sunny.jpg", clues: [
"Pakistan ki Ma ka Busni Ka",
"Calenders make me furious",
"In another life, I would have become a plumber",
"Same energy everywhere",
"Meet me in Border, 1 or 2, I don't care"
]},

{ name: "Madan Krishna Shrestha", image: "images/madan.jpg", clues: [
"Comedy with deep meaning",
"Society also included",
"Half of famous duo",
"Simple but strong lines",
"Maha Jodi"
]},

{ name: "Rajinikanth", image: "images/rajinikanth.jpg", clues: [
"Physics rules sometimes optional",
"Style works differently here",
"Entry feels like festival",
"Fans celebrate everything",
"Thalaiva"
]},

{ name: "Akshay Kumar", image: "images/akshay.jpg", clues: [
"Movies release faster than seasons",
"Work starts before planning ends",
"One friend still owes money",
"National topics appear often",
"Canada connection"
]},

{ name: "Dayahang Rai", image: "images/dayahang.jpg", clues: [
"Smile used very carefully",
"Acting feels too real sometimes",
"Budget small, talent big",
"Game keeps repeating",
"Kabaddi star"
]},

{ name: "Amitabh Bachchan", image: "images/amitabh.jpg", clues: [
"Voice feels like surround sound",
"Age never matched energy",
"Anger became style",
"A computer listens carefully",
"Rishte mein… dialogue"
]},

{ name: "Shakti Kapoor", image: "images/shakti.jpg", clues: [
"Villain and comedy mixed",
"Logic sometimes missing",
"Style very loud",
"Entry always funny",
"Crime Master Gogo"
]},

{ name: "Kangana Ranauwat", image: "images/kangana.jpg", clues: [
"I hate nepotism",
"I hate airport security",
"I love thumbs up",
"I believe in Karma over Dharma",
"I thought Koi mil gaya, but I was wrong"
]},

{ name: "Dharmendra", image: "images/dharmendra.jpg", clues: [
"Old charm still working",
"Romance + action combo",
"Climbing high is normal",
"Famous Basanti moment",
"He-Man"
]},

{ name: "Alia Bhatt", image: "images/alia.jpg", clues: [
"Confidence always high",
"Facts sometimes missing",
"Started from school life",
"One name shouted loudly",
"Student to Gangubai"
]},

{ name: "The Rock", image: "images/rock.jpg", clues: [
"Kala Patthar",
"I hate Diseal",
"Sakth Launda",
"My greatest nemesis is paper",
"I am music genre"
]},

{ name: "Rajinikanth (Alt)", image: "images/rajinikanth.jpg", clues: [
"Style breaks physics rules",
"Entry feels like festival",
"Fans celebrate everything",
"Simple moves look magical",
"Thalaiva"
]},

{ name: "Niel Armstrong", image: "images/neil.jpg", clues: [
"I wear very expensive suit at work",
"I believe in taking small steps",
"There used to be lot of buzz around me",
"My Karwa chauth will be iconic",
"Michael Jackson stole my hook step"
]},

{ name: "Salman Khan (Alt)", image: "images/salman.jpg", clues: [
"Shirt missing at key moments",
"Presence louder than script",
"Cases follow like shadows",
"Reality TV king",
"Being Human"
]}

];

/* =======================
   MODE SELECT
======================= */

function startGame(mode) {

  document.getElementById("mode-screen").style.display = "none";
  document.getElementById("game").style.display = "block";

  if (mode === "kids") {
    startIndex = 0;
    endIndex = data.findIndex(item => item.name === "Ranbir Kapoor");
  } else {
    startIndex = data.findIndex(item => item.name === "Ranbir Kapoor");
    endIndex = data.length;
  }

  current = startIndex;
  load();
}

/* =======================
   LOAD NEW CELEB
======================= */

function load() {
  let item = data[current];

  document.getElementById("name").innerText = "";

  let img = document.getElementById("image");
  img.src = item.image;
  img.style.opacity = "1";
  img.style.display = "block";

  let answerImg = document.getElementById("answer-image");
  answerImg.style.display = "none";
  answerImg.style.opacity = "0";

  document.getElementById("clues").innerHTML = "";

  step = -1;
}

/* =======================
   NEXT STEP LOGIC
======================= */

function nextStep() {
  let item = data[current];

  if (step === -1) {
    document.getElementById("image").style.opacity = "0";
    step++;
    return;
  }

  if (step < item.clues.length) {
    document.getElementById("clues").innerHTML += "<p>" + item.clues[step] + "</p>";
    step++;
    return;
  }

  if (step === item.clues.length) {
    document.getElementById("name").innerText = item.name;

    let answerImg = document.getElementById("answer-image");
    answerImg.src = item.image;
    answerImg.style.display = "block";

    setTimeout(() => {
      answerImg.style.opacity = "1";
    }, 50);

    step++;
    return;
  }

  current++;

  if (current >= endIndex) {
    current = startIndex;
  }

  load();
}

function goToMenu() {

  // Hide game
  document.getElementById("game").style.display = "none";

  // Show menu
  document.getElementById("mode-screen").style.display = "flex";

  // Reset state
  current = 0;
  step = -1;

  document.getElementById("clues").innerHTML = "";
  document.getElementById("name").innerText = "";

  document.getElementById("image").style.opacity = "1";
  document.getElementById("image").src = "";

  let answerImg = document.getElementById("answer-image");
  answerImg.style.display = "none";
  answerImg.style.opacity = "0";
}
function skip() {

  // Move to next celeb directly
  current++;

  // Stay within selected mode
  if (current >= endIndex) {
    current = startIndex;
  }

  // Load next celeb
  load();
}
/* =======================
   SPACEBAR CONTROL
======================= */

document.addEventListener("keydown", function(e) {
  if (e.code === "Space") {
    nextStep();
  }
});
