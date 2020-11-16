const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class player {
    constructor(id, name, age, skillSet, placeBorn){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
    }
  }
  class blueTeammate extends player {
    constructor(id, name, age, skillSet, placeBorn, color, mascott){
        super(id, name, age, skillSet, placeBorn)
        this.color = color;
        this.mascott = mascott;
    }
  }
  class redTeammate extends player {

    constructor(id, name, age, skillSet, placeBorn, color, mascott){
        super(id, name, age, skillSet, placeBorn)
        this.color = color;
        this.mascott = mascott;
    }
}
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      li.id = person.id
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  

  
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    const listElement = document.getElementById('players')
    arrOfPeople.map(person => { if(person.id === id){
        let newPlayer = new player(person.id, person.name, person.age, person.skillSet, person.placeBorn) 
        listOfPlayers.push(newPlayer)
        console.log(newPlayer)
        console.log(listOfPlayers)
        const li = document.createElement("li")
        li.id = id
        const redButton = document.createElement("button")
        const blueButton = document.createElement("button")
        redButton.innerHTML = "Red Team"
        blueButton.innerHTML = "Blue Team"
        redButton.addEventListener('click', function() {makeRedTeam(person.id)} )
        blueButton.addEventListener('click', function() {makeBlueTeam(person.id)} )
        li.appendChild(redButton)
        li.appendChild(blueButton)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    }
        
    })
  }

  const makeRedTeam = (id) => {
    console.log(`li ${id} was clicked!`)
    const listElement = document.getElementById('red')
    listOfPlayers.map(player => { if(player.id === id){
        let redPlayer = new redTeammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, "Red", "Giant Penis")
        redTeam.push(redPlayer)
        const oldListItem = document.getElementById(id)
        oldListItem.remove()
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(redPlayer.name + " - " + redPlayer.skillSet))
        listElement.append(li)
        
    }
        
    })
  }

  const makeBlueTeam = (id) => {
    console.log(`li ${id} was clicked!`)
    const listElement = document.getElementById('blue')
    listOfPlayers.map(player => { if(player.id === id){
        let bluePlayer = new blueTeammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, "Blue", "Blade of Grass")
        blueTeam.push(bluePlayer)
        const oldListItem = document.getElementById(id)
        oldListItem.remove()
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(bluePlayer.name + " - " + bluePlayer.skillSet))
        listElement.append(li)
        
    }
        
    })
  }