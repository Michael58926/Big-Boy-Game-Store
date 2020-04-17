/** Add any JavaScript you need to this file. */
var games = [
  {
    "Name": "The Legend of Zelda: Breath of the Wild",
    "Description": "Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure.",
    "Type" : "NS",
    "Price": "CDN$60.00",
    "Image": "zelda.jpg",
  },
  {
    "Name": "Uncharted 4: A Thief's End",
    "Description": "Several years after his last adventure, retired fortune hunter, Nathan Drake, is forced back into the world of thieves.His greatest adventure will test his physical limits, his resolve, and ultimately what he’s willing to sacrifice to save the ones he loves.",
    "Type" : "PS4",
    "Price": "CDN$50.00",
    "Image": "uncharted4.jpg",
  },
  {
    "Name": "Super Mario Odyssey",
    "Description": "Join Mario on a massive, globe-trotting 3D adventure and use his incredible new abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser's wedding plans!",
    "Type" : "NS",
    "Price": "CDN$55.00",
    "Image": "odyssey.jpg",
  },
  {
    "Name": "The Last of Us",
    "Description": "A pandemic has radically changed known civilization, Joel is hired to smuggle a 14 year-old girl, Ellie, out of an oppressive military quarantine zone, but what starts as a small job soon transforms into a brutal journey across the U.S.",
    "Type" : "PS4",
    "Price": "CDN$45.00",
    "Image": "lastofus.jpg",
  },
  {
    "Name": "New Super Mario Bros. U Deluxe",
    "Description": "Join Mario, Luigi, and pals for single-player or multiplayer fun anytime, anywhere! Take on two family-friendly, side-scrolling adventures with up to three friends* as you try to save the Mushroom Kingdom.",
    "Type" : "NS",
    "Price": "CDN$55.00",
    "Image": "mariobros.jpg",
  },
  {
    "Name": "Horizon Zero Dawn",
    "Description": "In a lush, post-apocalyptic world where nature has reclaimed the ruins of a forgotten civilization, pockets of humanity live on in primitive hunter-gatherer tribes. Their dominion over the new wilderness has been usurped by the Machines.",
    "Type" : "PS4",
    "Price": "CDN$45.00",
    "Image": "horizon.jpg",
  },
  {
    "Name": "Pokemon: Let’s Go, Pikachu!",
    "Description": "Take a Pokemo journey to the Kanto region with your energetic partner, Pikachu! Become the best Pokemon Trainer as you battle other Trainers, Gym Leaders, and the sinister Team Rocket.",
    "Type" : "NS",
    "Price": "CDN$60.00",
    "Image": "pikachu.jpg",
  },
  {
    "Name": "God of War",
    "Description": "Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.",
    "Type" : "PS4",
    "Price": "CDN$55.00",
    "Image": "godofwar.jpg",
  },
  {
    "Name": "Pokemon: Sword",
    "Description": "A new generation of Pokemon is coming to the Nintendo Switch system. Begin your adventure as a Pokemon Trainer by choosing one of three new partner Pokemon.",
    "Type" : "NS",
    "Price": "CDN$65.00",
    "Image": "sword.jpg",
  },
  {
    "Name": "Final Fantasy XV",
    "Description": "Crown Prince Noctis embarks on a quest to reclaim his homeland in this action-packed RPG. Join him and a colorful cast of characters on a road trip across the immersive and expansive world of Eos.",
    "Type" : "PS4",
    "Price": "CDN$50.00",
    "Image": "ffxv.jpg",
  },
];

window.onload = function() {
    allitems();
    document.querySelector("#cat0").onclick = allitems;
    document.querySelector("#cat1").onclick = ns;
    document.querySelector("#cat2").onclick = ps4;
};

function allitems() {
  var output = document.querySelector("#output");

  var existing = output.querySelector("div");
  if (existing) output.removeChild(existing);

  var items = document.createElement("div");
  output.appendChild(items);

  for (var i = 0; i < games.length; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    var c1 = getImage(games[i].Image);
    c1.setAttribute("class", "c1");
    row.appendChild(c1);

    var c2 = getTdElement(games[i].Name);
    c2.setAttribute("class", "c2");
    row.appendChild(c2);

    var c3 = getTdElement(games[i].Type);
    c3.setAttribute("class", "c3");
    row.appendChild(c3);

    var c4 = getTdElement(games[i].Description);
    c4.setAttribute("class", "c4");
    row.appendChild(c4);

    var c5 = getTdElement(games[i].Price);
    c5.setAttribute("class", "c5");
    row.appendChild(c5);

    items.appendChild(row);
  }
  window.event.returnValue = false;
}

function ns() {
  var output = document.querySelector("#output");

  var existing = output.querySelector("div");
  if (existing) output.removeChild(existing);

  var items = document.createElement("div");
  output.appendChild(items);

  for (var i = 0; i < games.length; i++) {
    if (games[i].Type === "NS") {
      var row = document.createElement("div");
      row.setAttribute("class", "row");
  
      var c1 = getImage(games[i].Image);
      c1.setAttribute("class", "c1");
      row.appendChild(c1);
  
      var c2 = getTdElement(games[i].Name);
      c2.setAttribute("class", "c2");
      row.appendChild(c2);
  
      var c3 = getTdElement(games[i].Type);
      c3.setAttribute("class", "c3");
      row.appendChild(c3);
  
      var c4 = getTdElement(games[i].Description);
      c4.setAttribute("class", "c4");
      row.appendChild(c4);
  
      var c5 = getTdElement(games[i].Price);
      c5.setAttribute("class", "c5");
      row.appendChild(c5);
  
      items.appendChild(row);
    }
  }
  window.event.returnValue = false;
}

function ps4() {
  var output = document.querySelector("#output");

  var existing = output.querySelector("div");
  if (existing) output.removeChild(existing);

  var items = document.createElement("div");
  output.appendChild(items);

  for (var i = 0; i < games.length; i++) {
    if(games[i].Type === "PS4") {
      var row = document.createElement("div");
      row.setAttribute("class", "row");
  
      var c1 = getImage(games[i].Image);
      c1.setAttribute("class", "c1");
      row.appendChild(c1);
  
      var c2 = getTdElement(games[i].Name);
      c2.setAttribute("class", "c2");
      row.appendChild(c2);
  
      var c3 = getTdElement(games[i].Type);
      c3.setAttribute("class", "c3");
      row.appendChild(c3);
  
      var c4 = getTdElement(games[i].Description);
      c4.setAttribute("class", "c4");
      row.appendChild(c4);
  
      var c5 = getTdElement(games[i].Price);
      c5.setAttribute("class", "c5");
      row.appendChild(c5);
  
      items.appendChild(row);
    }
  }
  window.event.returnValue = false;
}

function getTdElement(text) {
  var cellText = document.createTextNode(text);

  var cell = document.createElement("div");
  cell.appendChild(cellText);

  return cell;
}

function getImage(text) {
  var img = document.createElement("img");
  img.setAttribute("src", "images/" + text);
  
  var cell = document.createElement("div");
  cell.appendChild(img);

  return cell;
}
