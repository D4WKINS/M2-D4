
let globalNames = []

const teams = []

 
 
function generateRandomBetween(limit=1){
    // generate random index with the given limit
    return Math.ceil(Math.random()*limit)
}

function generateRandomTeams(numberOfTeams){

    // copy global names to mutate
    // keeping original 

    let names = [...globalNames]

    let team = []

    // when we equally distribute , are there remaining persons ?

    const remaining  = names.length % numberOfTeams

    // number of total equally distributable people

    const wholeNumber = names.length-remaining;

    const teamSize =  wholeNumber / numberOfTeams

    
    // do this operation number of teams times

    for(let i=0; i<numberOfTeams;i++){

        for(let j=0;j<teamSize;j++){

            const randomIndex = generateRandomBetween(names.length-1)

            const randomPerson = names[randomIndex]


            team.push(randomPerson)

            names.splice(randomIndex,1)

        }

        teams.push(team)

        team=[]
    }
    // distributing remaining people
    for(let  i = 0;i<remaining;i++){

        const randomTeamIndex = generateRandomBetween(teams.length-1)

        const randomTeam = teams[randomTeamIndex]

        const remainingPerson = names[i]

        randomTeam.push(remainingPerson)
    }

    return teams;
}
 


window.onload=function(){
    // <li class="list-group-item">An item</li>
    
    const list = document.querySelector(".list-group")

    const nameInput = document.querySelector("#name")

    const addButton = document.querySelector("#addButton")
    
    addButton.addEventListener("click",function(){

        const value = nameInput.value;

        const cleanedValue=  value.trim();  

        if(cleanedValue.length!==0){ // if its not empty

            const liElement = document.createElement("li")

            liElement.className="list-group-item"

            liElement.innerText=cleanedValue;

            list.appendChild(liElement)

            nameInput.value=''

            globalNames.push(cleanedValue)
            
        }
        else{
            alert("You didnt type anything 🤓")
        }
    })

    const numberOfTeams = document.querySelector("#numberOfTeams")

    generateButton.addEventListener("click",function(){

        const value = parseInt(numberOfTeams.value);
        const teamsDiv = document.querySelector("#teams")
        const generatedTeams = generateRandomTeams(value)
        
        generatedTeams.forEach((team)=>{
            const list = document.createElement("ul")
            list.className="list-group"
            list.classList.add("mt-5")
            team.forEach(member=>{
                const li  = document.createElement("li")
                li.className="list-group-item"
                li.innerText=member;
                list.appendChild(li)
            })
            teamsDiv.appendChild(list)
        })

    })
}