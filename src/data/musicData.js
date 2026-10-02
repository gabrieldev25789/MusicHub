export const generos = [
  { nome: "Pop", cores: ["#ff4f7b", "#ffb547"] },
  { nome: "Rock", cores: ["#e5383b", "#6a1b9a"] },
  { nome: "Indie Rock", cores: ["#ffb547", "#2fd1c5"] },
  { nome: "Hip hop", cores: ["#7b5cff", "#ff4f7b"] },
  { nome: "R&B", cores: ["#2fd1c5", "#7b5cff"] },
  { nome: "Soul", cores: ["#f9844a", "#ffd166"] },
  { nome: "Jazz", cores: ["#3a86ff", "#8338ec"] },
]

// 6 artistas por gênero deixa o anel mais bonito
export const artistas = {
  Pop: ["Michael Jackson", "The Weeknd", "Rihanna", "Lady Gaga", "Taylor Swift", "Ariana Grande"],
  Rock: ["Queen", "Nirvana", "Foo Fighters", "Led Zeppelin", "Pink Floyd", "AC/DC"],
  "Indie Rock": ["Arctic Monkeys", "Tame Impala", "The Strokes", "Vampire Weekend", "Mac DeMarco", "Beach House"],
  "Hip hop": ["Kanye West", "Drake", "Jay-Z", "J. Cole", "Travis Scott", "A$AP Rocky"],
  "R&B": ["Beyoncé", "Usher", "Chris Brown", "Janet Jackson", "Mary J. Blige", "Erykah Badu"],
  Soul: ["Aretha Franklin", "Stevie Wonder", "Marvin Gaye", "Alicia Keys", "Al Green", "Otis Redding"],
  Jazz: ["Miles Davis", "John Coltrane", "Norah Jones", "Ella Fitzgerald", "Louis Armstrong", "Billie Holiday"],
}

// "Título|ano" vira { titulo, ano }
const a = (...itens) =>
  itens.map((item) => {
    const [titulo, ano] = item.split("|")
    return { titulo, ano: Number(ano) }
  })

// 5 álbuns por artista (a chave é o nome do artista)
export const albuns = {
  // ---------- Pop ----------
  "Michael Jackson": a("Off the Wall|1979", "Thriller|1982", "Bad|1987", "Dangerous|1991", "HIStory|1995"),
  "The Weeknd": a("Kiss Land|2013", "Beauty Behind the Madness|2015", "Starboy|2016", "After Hours|2020", "Dawn FM|2022"),
  Rihanna: a("Good Girl Gone Bad|2007", "Rated R|2009", "Loud|2010", "Unapologetic|2012", "Anti|2016"),
  "Lady Gaga": a("The Fame|2008", "Born This Way|2011", "Artpop|2013", "Joanne|2016", "Chromatica|2020"),
  "Taylor Swift": a("Red|2012", "1989|2014", "Lover|2019", "Folklore|2020", "Midnights|2022"),
  "Ariana Grande": a("My Everything|2014", "Dangerous Woman|2016", "Sweetener|2018", "Thank U, Next|2019", "Eternal Sunshine|2024"),

  // ---------- Rock ----------
  Queen: a("Queen II|1974", "A Night at the Opera|1975", "News of the World|1977", "The Game|1980", "A Kind of Magic|1986"),
  Nirvana: a("Bleach|1989", "Nevermind|1991", "Incesticide|1992", "In Utero|1993", "MTV Unplugged in New York|1994"),
  "Foo Fighters": a("The Colour and the Shape|1997", "There Is Nothing Left to Lose|1999", "One by One|2002", "In Your Honor|2005", "Wasting Light|2011"),
  "Led Zeppelin": a("Led Zeppelin|1969", "Led Zeppelin II|1969", "Led Zeppelin IV|1971", "Houses of the Holy|1973", "Physical Graffiti|1975"),
  "Pink Floyd": a("The Piper at the Gates of Dawn|1967", "Meddle|1971", "The Dark Side of the Moon|1973", "Wish You Were Here|1975", "The Wall|1979"),
  "AC/DC": a("Let There Be Rock|1977", "Highway to Hell|1979", "Back in Black|1980", "For Those About to Rock We Salute You|1981", "The Razors Edge|1990"),

  // ---------- Indie Rock ----------
  "Arctic Monkeys": a("Whatever People Say I Am, That's What I'm Not|2006", "Favourite Worst Nightmare|2007", "Humbug|2009", "AM|2013", "Tranquility Base Hotel & Casino|2018"),
  "Tame Impala": a("InnerSpeaker|2010", "Lonerism|2012", "Currents|2015", "The Slow Rush|2020", "Deadbeat|2025"),
  "The Strokes": a("Is This It|2001", "Room on Fire|2003", "First Impressions of Earth|2006", "Angles|2011", "The New Abnormal|2020"),
  "Vampire Weekend": a("Vampire Weekend|2008", "Contra|2010", "Modern Vampires of the City|2013", "Father of the Bride|2019", "Only God Was Above Us|2024"),
  "Mac DeMarco": a("2|2012", "Salad Days|2014", "Another One|2015", "This Old Dog|2017", "Here Comes the Cowboy|2019"),
  "Beach House": a("Devotion|2008", "Teen Dream|2010", "Bloom|2012", "Depression Cherry|2015", "7|2018"),

  // ---------- Hip hop ----------
  "Kanye West": a("The College Dropout|2004", "Late Registration|2005", "Graduation|2007", "My Beautiful Dark Twisted Fantasy|2010", "Yeezus|2013"),
  Drake: a("Take Care|2011", "Nothing Was the Same|2013", "Views|2016", "Scorpion|2018", "Certified Lover Boy|2021"),
  "Jay-Z": a("Reasonable Doubt|1996", "The Blueprint|2001", "The Black Album|2003", "American Gangster|2007", "4:44|2017"),
  "J. Cole": a("Cole World: The Sideline Story|2011", "Born Sinner|2013", "2014 Forest Hills Drive|2014", "4 Your Eyez Only|2016", "KOD|2018"),
  "Travis Scott": a("Days Before Rodeo|2014", "Rodeo|2015", "Birds in the Trap Sing McKnight|2016", "Astroworld|2018", "Utopia|2023"),
  "A$AP Rocky": a("Live.Love.A$AP|2011", "Long.Live.A$AP|2013", "At.Long.Last.A$AP|2015", "Testing|2018", "Don't Be Dumb|2026"),

  // ---------- R&B ----------
  Beyoncé: a("Dangerously in Love|2003", "B'Day|2006", "Lemonade|2016", "Renaissance|2022", "Cowboy Carter|2024"),
  Usher: a("My Way|1997", "8701|2001", "Confessions|2004", "Here I Stand|2008", "Raymond v. Raymond|2010"),
  "Chris Brown": a("Exclusive|2007", "Graffiti|2009", "F.A.M.E.|2011", "X|2014", "Indigo|2019"),
  "Janet Jackson": a("Control|1986", "Rhythm Nation 1814|1989", "janet.|1993", "The Velvet Rope|1997", "All for You|2001"),
  "Mary J. Blige": a("What's the 411?|1992", "My Life|1994", "Share My World|1997", "Mary|1999", "The Breakthrough|2005"),
  "Erykah Badu": a("Baduizm|1997", "Mama's Gun|2000", "Worldwide Underground|2003", "New Amerykah Part One|2008", "New Amerykah Part Two|2010"),

  // ---------- Soul ----------
  "Aretha Franklin": a("Lady Soul|1968", "Spirit in the Dark|1970", "Young, Gifted and Black|1972", "Amazing Grace|1972", "I Never Loved a Man the Way I Love You|1967"),
  "Stevie Wonder": a("Talking Book|1972", "Innervisions|1973", "Fulfillingness' First Finale|1974", "Songs in the Key of Life|1976", "Hotter than July|1980"),
  "Marvin Gaye": a("What's Going On|1971", "Trouble Man|1972", "Let's Get It On|1973", "I Want You|1976", "Midnight Love|1982"),
  "Alicia Keys": a("Songs in A Minor|2001", "The Diary of Alicia Keys|2003", "As I Am|2007", "The Element of Freedom|2009", "Girl on Fire|2012"),
  "Al Green": a("Gets Next to You|1971", "Let's Stay Together|1972", "I'm Still in Love with You|1972", "Call Me|1973", "Livin' for You|1973"),
  "Otis Redding": a("Otis Blue|1965", "The Soul Album|1966", "The Dictionary of Soul|1966", "King & Queen|1967", "The Dock of the Bay|1968"),

  // ---------- Jazz ----------
  "Miles Davis": a("Birth of the Cool|1957", "Kind of Blue|1959", "Sketches of Spain|1960", "In a Silent Way|1969", "Bitches Brew|1970"),
  "John Coltrane": a("Blue Train|1958", "Giant Steps|1960", "My Favorite Things|1961", "Ballads|1963", "A Love Supreme|1965"),
  "Norah Jones": a("Come Away with Me|2002", "Feels Like Home|2004", "Not Too Late|2007", "...Little Broken Hearts|2012", "Day Breaks|2016"),
  "Ella Fitzgerald": a("Ella Fitzgerald Sings the Cole Porter Song Book|1956", "Ella and Louis|1956", "Ella Fitzgerald Sings the Duke Ellington Song Book|1957", "Ella in Berlin|1960", "Ella Swings Brightly with Nelson Riddle|1962"),
  "Louis Armstrong": a("Louis Armstrong Plays W.C. Handy|1954", "Satch Plays Fats|1955", "Ambassador Satch|1956", "Hello, Dolly!|1964", "What a Wonderful World|1968"),
  "Billie Holiday": a("Lady Sings the Blues|1956", "Songs for Distingué Lovers|1957", "Body and Soul|1957", "All or Nothing at All|1958", "Lady in Satin|1958"),
}

console.log(albuns)