console.clear()
const readline = require('readline-sync')

const newItem = "NEW ITEM added to inventory* "
let tarnishedName = ""
let tarnishedLocation = "The lands between"
let inventory = ["Rainbow Stone"]
let said = false
let defeated = false
let encounters = 0
let foeName = ''
let foeDescription = ''
let foeAtk = ''
let foeHP = ''
let foeHit = ''
let foeCrt = ''
let foeItem = ''
let foeItemDescription = ''
let engage = ''
let attackCounter = ""
let eggsAcquired = false
let shieldAcquired = false


let tarnished = { 
    'hp': 150, 
    'atk':10, 
    'crt':6, 
    'def':1,
    'hit':2,
    'inventory': inventory
}

const limgraveFoe = [
    {
        'name':'Demi-human',
        'description': ' Demi-Humans are small in stature, but with a violent, brutish disposition, Their appearance is wide-ranging, but they commonly look like armored primates that wield melee weapons and wooden shields.',
        'attack': 10,
        'hp': 30,
        'hit': 1,
        'crt': 20,
        'item': 'Glass Shard',
        'itemDescription': 'Oooh shiny... useless, but shiny'
    },
    { 
        'name' : 'Giant Crab',
        'description' : ' Large crustaceans with an appetite that matches their sheer size. They often use their claws to crush their prey, and can spray breath that can have varying effects, depending on their environment.',
        'attack' : 50,
        'hp': 80,
        'hit' : 2,
        'crt' : 15, 
        'item' : 'Crab eggs',
        'itemDescription' : 'A nutritious foodstuff that warms from within. The flavor is exquisite.'
    },
    {
        'name' : 'Godrick Knight',
        'description' : 'Godrick Knight is a Humanoid enemy. Godrick Knights wield large, heavy melee Weapons and protect themselves with Greatshields and full Body Armor.',
        'attack' : 40,
        'hp': 65,
        'hit' : 2, 
        'crt' : 10, 
        'item' : 'Gilded Greatshield',
        'itemDescription' : 'Metal greatshield coated with gold. Carried by knights loyal to Godrick. significantly boosts defense'
    }
]

const leyndellFoe =[
    {
        'name' : 'Oracle Envoy',
        'description' : 'Oracle Envoy is a Humanoid Enemy. Playing their trumpet-like instrument, will engage the player once in their sights. They blow bubbles from their instruments.',
        'attack' : 30,
        'hp' : 55,
        'hit' : 2,
        'crt' : 9, 
        'item' : 'white flesh',
        'itemDescription' : 'Gross why would you pick that up'
    },
    {
        'name' : 'Perfumer',
        'description' : 'Once serving as apothecaries, perfumers weild swords and can use their perfumes to throw exploding sparks',
        'attack' : 30,
        'hp': 50,
        'hit' : 2,
        'crt' : 10, 
        'item' : 'perfumer bottle',
        'itemDescription' : 'some smell good'
    },
    {
        'name' : 'Ulcerated Tree Spirit',
        'description' : 'a towering, centipede-like creature that heavily features bodies composed of tree-like structures.',
        'attack' : 80,
        'hp' : 150,
        'hit' : 3,
        'crt' : 25, 
        'item' : 'Golden Seed',
        'itemDescription' : 'Eat this, you deserve it'
    }
]

const eldenBeast = {
    'name' : 'The Elden Beast',
    'description' : 'It is said that long ago, the Greater Will sent a golden star bearing a beast into the Lands Between, which would later become the Elden Ring.',
    'atk': 40,
    'hit' : 2,
    'hp' : 250,
    'hit':6,
    'crt':10,
}


const welcome = readline.question("Oh look, another maidenless tarnished. What do i have the displeasure of calling you? ")
console.clear()
function whatsName(){
    if(welcome === ""){
        tarnishedName = ""
    }else{
        tarnishedName = welcome
    }
}
 
if (welcome === null){
    unworthy()
}else{
    whatsName()
    startJourney()
}

function startJourney (){
    console.clear()
    const startJourney = readline.keyInYN(tarnishedName + ', will you make a feeble attempt to be the next elden lord? ')
    if (startJourney === true){
        begin()
    } else if(startJourney === false){
        unworthy()
      }}

      function unworthy (){
          console.clear()
          readline.keyInPause('no maidens lol...')
          Process.exit()
      }

      function begin(){
          console.clear()
          const lore = readline.keyInYN (`Its just as the prophecy fortold: "as the echoes of conflict thunder in the distance, an outcast arrives. Once, their ancestors called the Lands Between home, but the blessed light of grace was lost to their tribe long ago and they were expelled from the kingdom. They are the Tarnished, and they have returned to claim the Elden Lordship promised to them by legend." They are you, the tarnished, do you accept this challenge? `)
        if (lore === true){
            toLimgrave()
        }else if(lore === false){
            unworthy()
        }}

function toLimgrave(){
    console.clear()
    let weapon = readline.keyIn( 'Before you begin tell me about yourself, which do you prefer? (1)One-handed Weapons (2)Two-handed Weapons (M)Magic (H)Deprived' ,{limit:'$<1,2,m,h>'})
    tarnishedWeapon = weapon.toUpperCase()
    switch(tarnishedWeapon){
        case "1": 
            spear()
        break;
        case "2":
            claymore()
        break;
        case "M":
            magic()
        break;
        case "H":
            hands()
            readline.keyInPause(tarnishedName + ` :"All i need is these hands" `)
    }
    printTarnished()
    enterLimgrave()
}

function spear(){
    console.clear()
    tarnished.atk = tarnished.atk + 10
    tarnished.def = tarnished.def + 10
    tarnished.hit = tarnished.hit + 2
    readline.keyInPause(newItem + `'Spear: Long stick with a sharp metal end, perfect for use with a greatshield. Does Pierce Damage`)
    inventory.push("Spear")
}
function claymore(){
    console.clear()
    tarnished.atk = tarnished.atk + 25
    tarnished.def = tarnished.def + 5
    tarnished.hit = tarnished.hit + 2
    readline.keyInPause(newItem + `Claymore: A large sword with a long, straight blade. This heavy sword is wielded with two hands`)
    inventory.push("Claymore")
}    
function magic(){
    console.clear()
    tarnished.atk = tarnished.atk + 45
    tarnished.def = tarnished.def - 5
    tarnished.hit = tarnished.hit + 1
    readline.keyInPause(newItem + `Staff: Grants the ability to cast very offensive and damaging magic`)
    inventory.push("Staff")
}
function hands(){
    console.clear()
    tarnished.atk = tarnished.atk + 0
    tarnished.def = tarnished.def - 10
    tarnished.hit = tarnished.hit +3
    readline.keyInPause(`ive seen MMA before, i dont need weapons`)
    inventory.push("Hands")
}
function gilded(){
    tarnished.def = tarnished.def + 25
}
function seed(){
    tarnished.hp = tarnished.hp + 100
}
function eggs(){
    tarnished.atk = tarnished.atk + 10
}



function printTarnished(){
    console.clear()
    readline.keyInPause("Name: " + tarnishedName + `\nLocation: ` + tarnishedLocation + "\nHP: " + tarnished.hp + "\nAttack: " + tarnished.atk + "\nDefense: " + tarnished.def + "\nCritical Attack: " + tarnished.crt + "\nInventory: " + tarnished.inventory + '\nEncounters: ' + encounters)
}


function enterLimgrave(){
    console.clear()
    readline.keyInPause(`Suddenly, everything goes dark. You pass out and awake in a tomb like area left with the weapon of your choice and some rags to cover your body. you work your way out of the tomb and see a giant landmass ravaged by war and despair... you take your first steps into limgrave. `)
}


function walk(){
    console.clear()
    if(encounters < 3){
        tarnishedLocation = "Limgrave"
    }else{
        tarnishedLocation = "Leyndell Royal Capital"
    }
    if (encounters === 3 && said !== true){
        leyndell()
    }
    let chance = Math.floor((Math.random()*2)+1)
    switch(chance){
        case 1:
            encounter()
        break;
        default:
            safe()
        break;  
    }
}

function leyndell(){
    console.clear()
    tarnishedLocation = "The Royal Capital"
    said = true
    readline.keyInPause(`The journey through limgrave was intense to say the least, but now you approach the entrance to the Elden Beasts Lair, The Royal Capital. You know the worst is yet to come. Theres a glorious golden glow surronding the area; ominously. You've made it this far, no turning back now!`)
}

function safe(){
    console.clear()
    if(tarnishedLocation === "Limgrave"){
        readline.keyInPause("The area is quiet, too quiet. You cant even hear the cursed knights patrolling the roads anymore.")
        choice()
        
    }else if(tarnishedLocation === "Leyndell Royal Capital"){
        readline.keyInPause("The ominus glow of the city sky is overwhelming. You hear a band playing but see no one and nothing around you.")
        choice()
    }
}

function encounter(){
    console.clear()
    encounters ++
    if(encounters > 6){
        fight(eldenBeast)
    }else{
        if(tarnishedLocation === "Limgrave"){
            let number = Math.floor((Math.random()*3)+1)-1
            let limgraveBeast = limgraveFoe[number]
            fight(limgraveBeast)
        }else if(tarnishedLocation === "Leyndell Royal Capital"){
            let number = Math.floor((Math.random()*3)+1)-1
            let leyndellBeast = leyndellFoe[number]
            fight(leyndellBeast)
        choice()
    }
}}

function choice(){
    console.clear()
    let journey = readline.keyIn(`Would you like to: (w)Continue Walking or (p) print your current stats? `,{limit:'$<w,p>'})
    if (journey === "w"){
        readline.keyInPause("You continue on your quest")
    }else if (journey === "p"){
        printTarnished()
    }
}

function fight(creature){
    console.clear()
    foeName = creature.name
    foeDescription = creature.description
    foeAtk = creature.atk - tarnished.def
    foeHP = creature.hp
    foeHit = creature.hit
    foeCrt = creature.crt
    foeItem = creature.item
    foeItemDescription = creature.itemDescription
    engage = readline.keyIn(`You've encountered ` + foeName + `. ` + foeDescription + ` (a) Attack or (r) Run? `,{limit:'$<a,r>'})
    engage = engage.toLowerCase()
    if (engage === 'a'){
        console.clear()
        attack()
    }else if (engage === 'r'){
        runAway()
    }if
}

function attack(){
    while(engage === 'a'){
                let tarnishedAtk = tarnished.atk
                let tarnishedDef = tarnished.def
                let tarnishedHit = tarnished.hit
                let tarnishedCrt = tarnished.crt
                let tarnishedAttack = ''
                let foesAttack = ""
                foeHit = foeHit - tarnishedDef
                let tarnishedStrike = Math.floor((Math.random()*tarnishedHit)+1)
                let tarnishedCrit = Math.floor((Math.random()*tarnishedCrt)+1)
                let foeStrike = Math.floor((Math.random()*foeHit)+1)
                let foeCrit = Math.floor((Math.random()*foeCrt)+1)
                if (tarnishedStrike === 1){
                    if (tarnishedCrit === 1){
                        tarnishedAttack = 'land a critical attack and deal ' + (tarnishedAtk *3) + ` points of damage. The `
                        foeHP = foeHP - (tarnishedAtk * 3)
                        if(foeHP < 0){
                            foeHP = 0
                        }
                    }else{
                        tarnishedAttack = 'attack the ' + foeName + ` and deal ` + tarnishedAtk + ` points of damage. The `
                        foeHP = foeHP - tarnishedAtk
                        if(foeHP < 0){
                            foeHP = 0
                        }
                }
                }else{
                    tarnishedAttack = `miss the ` + foeName + ` and deal no damage. The `
                }
                if (foeStrike === 1){
                    if (foeCrit === 1){
                        foeAtk = foeAtk * 3
                        tarnished.hp = tarnished.hp - foeAtk
                        foesAttack = 'lands a critical attack dealing ' + foeAtk + ' points of damage to you.'
                    }else{
                        tarnished.hp = tarnished.hp - foeAtkreadline.keyInPause()
                        foesAttack = ' attacks dealing ' + foeAtk + ' points of damage to you.'
                    }
                }else{
                    foesAttack = `'s attack misses. `
                }
                if(tarnished.hp > 0){
                    if(foeHP > 0){
                        if (attackCounter > 4){
                            console.clear()
                            attackCounter = 0
                        }
                        engage = readline.keyIn(`You ` + tarnishedAttack + foeName + foesAttack + `Your current HP is ` + tarnished.hp + ` and the ` + foeName + `'s current HP is ` + foeHP + `. (a) Attack again or (r)Run? `,{limit:'$<a,r>'})
                        attackCounter ++
                       
                    }else if(foeHP <= 0 && foeName !== 'The Elden Beast' ){
                        readline.keyInPause(`You ` + tarnishedAttack + foeName + foesAttack + `Your current HP is ` + tarnished.hp + ` and the ` + foeName + `'s current HP is ` + foeHP + `. You have defeated the ` + foeName)
                        itemDrop()
                        readline.keyInPause("You continue on your quest")
                        engage = ''
                    }else{
                        defeated = true
                        readline.keyInPause(newItem + 'Shattered Elden Ring: Used to break the control of thge greater will and bring upon the new age of the Elden Lord ' + tarnishedName + `!`)
                        inventory.push('Shattered Elden Ring')
                        victory()
                    }
            }else{ 
            fallenTarnished()
        }
    }
}

function runAway(){
    let chance = Math.floor((Math.random()*2)+1)
    while(engage === 'r'){
        if (chance !== 1){
            tarnished.hp = tarnished.hp - foeAtk
            engage = 'a'
            engage = readline.keyIn(`You attempt to run but ` + foeName +  ` attacks dealing ` + foeAtk + ' points of damage to you.'+ `Your current HP is ` + tarnished.hp + ` and the ` + foeName + `'s current HP is ` + foeHP + `. (a) Attack or (r)Run? `,{limit:'$<a,r>'})
            if (engage === 'a'){
                attack()
            }
        }else{
            readline.keyInPause('You manage to escape safely')
            engage = ''
        }
    }
}

function itemDrop(){
    console.clear()
    if (foeName === "Giant Crab" && eggsAcquired === false){
        eggs()
        eggsAcquired = true
        inventory.push(foeItem)
        readline.keyInPause(newItem + foeItem + ": " + foeItemDescription)
    }if(foeName === "Ulcerated Tree Spirit"){
        seed()
        inventory.push(foeItem)
        readline.keyInPause(newItem + foeItem + ": " + foeItemDescription)
    }if(foeName ==="Godrick Knight" && shieldAcquired === false){
        gilded()
        shieldAcquired === true
        inventory.push(foeItem)
        readline.keyInPause(newItem + foeItem + ": " + foeItemDescription)
    }
    else{
        inventory.push(foeItem)
        readline.keyInPause(newItem + foeItem + ": " + foeItemDescription)
    }
}




function fallenTarnished(){
    console.clear()
    engage = ''
    readline.keyInPause(`You knew you couldnt defeat a god ` + tarnishedName + ` ..... but, you are cursed to try again.`)
        process.exit()
}

function victory(){
    console.clear()
    var youWon = readline.keyInPause(`You defeat the Elden Beast and destroy the Elden ring. You will bring in a new era of the Elden Lord without influence form the outer gods.... or will you?`)
    console.clear()
    process.exit()
}

while (tarnished.hp > 0 && defeated !== true){
    console.clear()
    walk()}


   