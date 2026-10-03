import { slug } from "./musicData"

// A chave é "slug-do-artista/slug-do-album", a mesma lógica das capas.
// Cada faixa é só o título por enquanto (dá pra acrescentar duração, feat etc. depois).
const f = (...titulos) => titulos.map((titulo) => ({ titulo }))

export const faixas = {
  // ---------- Drake ----------
  "drake/take-care": f(
    "Over My Dead Body", "Shot for Me", "Headlines", "Crew Love", "Take Care",
    "Marvins Room", "Buried Alive Interlude", "Under Ground Kings", "We'll Be Fine",
    "Make Me Proud", "Lord Knows", "Cameras / Good Ones Go Interlude", "Doing It Wrong",
    "The Real Her", "Look What You've Done", "HYFR (Hell Ya Fucking Right)", "Practice", "The Ride"
  ),

  "drake/nothing-was-the-same": f(
    "Tuscan Leather", "Furthest Thing", "Started from the Bottom", "Wu-Tang Forever",
    "Own It", "Worst Behavior", "From Time", "Hold On, We're Going Home", "Connect",
    "The Language", "305 to My City", "Too Much", "Pound Cake / Paris Morton Music 2"
  ),

  "drake/views": f(
    "Keep the Family Close", "9", "U with Me?", "Feel No Ways", "Hype", "Weston Road Flows",
    "Redemption", "With You", "Faithful", "Still Here", "Controlla", "One Dance", "Grammys",
    "Child's Play", "Pop Style", "Too Good", "Summers Over Interlude", "Fire & Desire",
    "Views", "Hotline Bling"
  ),

  "drake/scorpion": f(
    "Survival", "Nonstop", "Elevate", "Emotionless", "God's Plan", "I'm Upset", "8 Out of 10",
    "Mob Ties", "Can't Take a Joke", "Sandra's Rose", "Talk Up", "Is There More",
    "Peak", "Summer Games", "Jaded", "Nice for What", "Finesse", "Ratchet Happy Birthday",
    "That's How You Feel", "Blue Tint", "In My Feelings", "Don't Matter to Me", "After Dark",
    "Final Fantasy", "March 14"
  ),

  "drake/certified-lover-boy": f(
    "Champagne Poetry", "Papi's Home", "Girls Want Girls", "In the Bible", "Love All",
    "Fair Trade", "Way 2 Sexy", "TSU", "N 2 Deep", "Pipe Down", "Yebba's Heartbreak",
    "No Friends in the Industry", "Knife Talk", "7am on Bridle Path", "Race My Mind",
    "Fountains", "Get Along Better", "You Only Live Twice", "IMY2", "Fucking Fans", "The Remorse"
  ),
}

// Devolve as faixas do álbum, ou undefined se ainda não foram cadastradas
export const faixasDoAlbum = (artista, titulo) =>
  faixas[`${slug(artista)}/${slug(titulo)}`]