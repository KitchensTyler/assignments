function whichPlayer(){
    let randoNum = getRandomInt(0,1)
    if (randoNum === 0){
        setName = "Mario"
    } else if (randoNum === 1){
        setName = "Luigi"
    }
}

whichPlayer()

class player {
    constructor (name, totalCoins, status, hasStar) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
    
    }
    setName(namePicked){
        if (namePicked === "Luigi"){
            this.name = "Luigi"
        } else if (namePicked === "Mario"){
            this.name = "Mario"
        }
    }
    gotHit(){
        if (this.hasStar === true){
            console.log("Your star protected you from the hit! As a consequence you lose your star..")
            this.hasStar = false
        }
        else if (this.status === "Powered Up"){
            console.log("You got hit and went from powered up to big")
            this.status = "Big"
        }
        else if (this.status === "Big"){
            console.log("You got hit and went from big to small")
            this.status = "Small"
        }
        else if (this.status === "Small"){
            console.log("You got hit and died!")
            this.status = "Dead"
        }
    }
    gotPowerup(){
        if (this.status === "Powered Up"){
            this.hasStar = true
            console.log("OH BOY LOOK WHAT YOU FOUND!?! Congratulations, you got a star! ")
        } else if (this.status === "Big"){
            console.log("You found a powerup and went from big to powered up!")
            this.status = "Powered Up"
        } else if (this.status === "Small"){
            console.log("You found a powerup and went from small to big!")
            this.status = "Big"
        }
    }
    addCoin(){
        this.totalCoins++
        console.log("You found a coin!")
    }
    print(){
        if (this.status === "Powered Up"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        }   
        else if (this.status === "Big"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        } 
        else if(this.status === "Small"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        } 
        else if (this.status === "Dead"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
            clearInterval(printout)
            process.kill(process.pid, 'SIGINT')
    }
    }
}

// if (this.status === "dead")
        // clearInterval(printout)
let userOne = new player ("userOne", 0, "Small", false)
let userTwo = new player ("userTwo", 0, "Small", false)

userOne.setName("Mario")
userTwo.setName("Luigi")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomEvent(){
    randoNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0

    if(userOne){
        randoNum = getRandomInt(0,2)
        if (randoNum === 0){
            userOne.gotHit()
            userOne.print()
        } else if (randoNum === 1){ 
            userOne.gotPowerup()
            userOne.print()
        }else if (randoNum === 2){ 
            userOne.addCoin()
            userOne.print()      
        }
    }
    else if (userTwo){
        randoNum = getRandomInt(0,2)
        if (randoNum === 0){
            userTwo.gotHit()
            userTwo.print()
        } else if (randoNum === 1){ 
            userTwo.gotPowerup()
            userTwo.print()
        }else if (randoNum === 2){
            userTwo.addCoin()
            userTwo.print()      
        }
    }
}

let printout = setInterval(() => randomEvent(),1000)



// let death = setInterval(() => userOne.status = "Dead", 5000);