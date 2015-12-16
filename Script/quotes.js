var quotes = [
	{
		quote: "Science is organized knowledge.",
		name: "Herbert Spencer"
	},
	{
		quote: "Science is facts; just as houses are made of stone, so is science made of facts; but a pile of stones is not a house, and a collection of facts is not necessarily science.",
		name: "Jules Henri Poincare"
	},
	{
		quote: "Science is what you know. Philosophy is what you don't know.",
		name: "Bertrand Russell"
	},
	{
		quote: "There are in fact two things, science and opinion; the former begets knowledge, the latter ignorance.",
		name: "Hippocrates"
	},
	{
		quote: "There is no adequate defense, except stupidity, against the impact of a new idea.",
		name: "Percy Williams Bridgman"
	},
	{
		quote: "We see only what we know.",
		name: "Johann Wolfgang von Goethe"
	},
	{
		quote: "I do not like it, and I am sorry I ever had anything to do with it.",
		name: "Erwin Schrodinger <em>speaking of quantum mechanics</em>."
	},
	{
		quote: "Why are things as they are and not otherwise?",
		name: "Johannes Kepler"
	},
	{
		quote: "When we try to pick out anything by itself, we find it is tied to everything else in the universe.",
		name: "John Muir"
	},
	{
		quote: "You cannot teach a man anything; you can only help him find it within himself.",
		name: "Galileo Galilei"
	},
	{
		quote: "Happy is he who gets to know the reasons for things.",
		name: "Virgil"
	},
	{
		quote: "The man of science has learned to believe in justification, not by faith, but by verification.",
		name: "Thomas H. Huxley"
	},
	{
		quote: "True science teaches us to doubt and, in ignorance, to refrain.",
		name: "Claude Bernard"
	},
	{
		quote: "Philosophy of science is about as useful to scientists as ornithology is to birds.",
		name: "Richard Feynman"
	},
	{
		quote: "Chance favors the prepared mind.",
		name: "Louis Pasteur"
	},
	{
		quote: "Somewhere, something incredible is waiting to be known.",
		name: "Carl Sagan"
	},
	{
		quote: "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
		name: "Carl Sagan"
	},
	{
		quote: "Other things being equal, it is better to be smart than to be stupid.",
		name: "Carl Sagan"
	},
	{
		quote: "The first principle is that you must not fool yourself - you are the easiest person to fool.",
		name: "Richard Feynman"
	},
	{
		quote: "It's not unscientific to make a guess, although many peolple who are not in science think it is.",
		name: "Richard Feynman"
	}
];

var backgroundColors = ["#FF6D00", "#931621", "#4F7CAC", "#21A0A0", "#1E3888"],
	quoteEl = document.getElementById("quote-contents"),
	speakerEl = document.getElementById("quote-speaker"),
	button = document.getElementById("quote-btn"),
	bodyColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');


function getAndSetQuote() {
  var randomNum = randomIndexValue(quotes);
  var quoteToUse = quotes[randomNum];
  quoteEl.innerHTML = quoteToUse.quote;
  speakerEl.innerHTML = quoteToUse.name;
  changeBackground();
}

function randomIndexValue (arr) {
  var len = arr.length;
  var randomIndex = Math.floor(Math.random () * len);
  return randomIndex;
}

function styleButton() {
  button.style.color = bodyColor;
  button.style.background = "white";
}

function unstyleButton() {
	button.style.background = bodyColor;
	button.style.color = "white";
}

function changeBackground() {
  var randomNum = randomIndexValue(backgroundColors);
  bodyColor = backgroundColors[randomNum];
  document.body.style.background = bodyColor;
  button.style.color = bodyColor;
}

button.addEventListener("mouseover", styleButton);
button.addEventListener("click", getAndSetQuote);
button.addEventListener("mouseout", unstyleButton);