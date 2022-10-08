document.addEventListener('DOMContentLoaded', ()=>{
    // card options
    const cardArray = [
        //DIAMONDS
        {
            name:'ace_of_diamonds',
            img: 'src/images/ace_of_diamonds.png',
            pairID: 1
        },
        {
            name:'2_of_diamonds',
            img: 'src/images/2_of_diamonds.png',
            pairID: 2
        },
        {
            name:'3_of_diamonds',
            img: 'src/images/3_of_diamonds.png',
            pairID: 3
        },
        {
            name:'4_of_diamonds',
            img: 'src/images/4_of_diamonds.png',
            pairID: 4
        },
        {
            name:'5_of_diamonds',
            img: 'src/images/5_of_diamonds.png',
            pairID: 5
        },
        {
            name:'6_of_diamonds',
            img: 'src/images/6_of_diamonds.png',
            pairID: 6
        },
        {
            name:'7_of_diamonds',
            img: 'src/images/7_of_diamonds.png',
            pairID: 7
        },
        {
            name:'8_of_diamonds',
            img: 'src/images/8_of_diamonds.png',
            pairID: 8
        },
        {
            name:'9_of_diamonds',
            img: 'src/images/9_of_diamonds.png',
            pairID: 9
        },
        {
            name:'10_of_diamonds',
            img: 'src/images/10_of_diamonds.png',
            pairID: 10
        },
        {
            name:'jack_of_diamonds',
            img: 'src/images/jack_of_diamonds.png',
            pairID: 11
        },
        {
            name:'queen_of_diamonds',
            img: 'src/images/queen_of_diamonds.png',
            pairID: 12
        },
        {
            name:'king_of_diamonds',
            img: 'src/images/king_of_diamonds.png',
            pairID: 13
        },
        // HEARTS
        {
            name:'ace_of_hearts',
            img: 'src/images/ace_of_hearts.png',
            pairID: 1
        },
        {
            name:'2_of_hearts',
            img: 'src/images/2_of_hearts.png',
            pairID: 2
        },
        {
            name:'3_of_hearts',
            img: 'src/images/3_of_hearts.png',
            pairID: 3
        },
        {
            name:'4_of_hearts',
            img: 'src/images/4_of_hearts.png',
            pairID: 4
        },
        {
            name:'5_of_hearts',
            img: 'src/images/5_of_hearts.png',
            pairID: 5
        },
        {
            name:'6_of_hearts',
            img: 'src/images/6_of_hearts.png',
            pairID: 6
        },
        {
            name:'7_of_hearts',
            img: 'src/images/7_of_hearts.png',
            pairID: 7
        },
        {
            name:'8_of_hearts',
            img: 'src/images/8_of_hearts.png',
            pairID: 8
        },
        {
            name:'9_of_hearts',
            img: 'src/images/9_of_hearts.png',
            pairID: 9
        },
        {
            name:'10_of_hearts',
            img: 'src/images/10_of_hearts.png',
            pairID: 10
        },
        {
            name:'jack_of_hearts',
            img: 'src/images/jack_of_hearts.png',
            pairID: 11
        },
        {
            name:'queen_of_hearts',
            img: 'src/images/queen_of_hearts.png',
            pairID: 12
        },
        {
            name:'king_of_hearts',
            img: 'src/images/king_of_hearts.png',
            pairID: 13
        },
        // CLUBS
        {
            name:'ace_of_clubs',
            img: 'src/images/ace_of_clubs.png',
            pairID: 14
        },
        {
            name:'2_of_clubs',
            img: 'src/images/2_of_clubs.png',
            pairID: 15
        },
        {
            name:'3_of_clubs',
            img: 'src/images/3_of_clubs.png',
            pairID: 16
        },
        {
            name:'4_of_clubs',
            img: 'src/images/4_of_clubs.png',
            pairID: 17
        },
        {
            name:'5_of_clubs',
            img: 'src/images/5_of_clubs.png',
            pairID: 18
        },
        {
            name:'6_of_clubs',
            img: 'src/images/6_of_clubs.png',
            pairID: 19
        },
        {
            name:'7_of_clubs',
            img: 'src/images/7_of_clubs.png',
            pairID: 20
        },
        {
            name:'8_of_clubs',
            img: 'src/images/8_of_clubs.png',
            pairID: 21
        },
        {
            name:'9_of_clubs',
            img: 'src/images/9_of_clubs.png',
            pairID: 22
        },
        {
            name:'10_of_clubs',
            img: 'src/images/10_of_clubs.png',
            pairID: 23
        },
        {
            name:'jack_of_clubs',
            img: 'src/images/jack_of_clubs.png',
            pairID: 24
        },
        {
            name:'queen_of_clubs',
            img: 'src/images/queen_of_clubs.png',
            pairID: 25
        },
        {
            name:'king_of_clubs',
            img: 'src/images/king_of_clubs.png',
            pairID: 26
        },
        // SPADES
        {
            name:'ace_of_spades',
            img: 'src/images/ace_of_spades.png',
            pairID: 14
        },
        {
            name:'2_of_spades',
            img: 'src/images/2_of_spades.png',
            pairID: 15
        },
        {
            name:'3_of_spades',
            img: 'src/images/3_of_spades.png',
            pairID: 16
        },
        {
            name:'4_of_spades',
            img: 'src/images/4_of_spades.png',
            pairID: 17
        },
        {
            name:'5_of_spades',
            img: 'src/images/5_of_spades.png',
            pairID: 18
        },
        {
            name:'6_of_spades',
            img: 'src/images/6_of_spades.png',
            pairID: 19
        },
        {
            name:'7_of_spades',
            img: 'src/images/7_of_spades.png',
            pairID: 20
        },
        {
            name:'8_of_spades',
            img: 'src/images/8_of_spades.png',
            pairID: 21
        },
        {
            name:'9_of_spades',
            img: 'src/images/9_of_spades.png',
            pairID: 22
        },
        {
            name:'10_of_spades',
            img: 'src/images/10_of_spades.png',
            pairID: 23
        },
        {
            name:'jack_of_spades',
            img: 'src/images/jack_of_spades.png',
            pairID: 24
        },
        {
            name:'queen_of_spades',
            img: 'src/images/queen_of_spades.png',
            pairID: 25
        },
        {
            name:'king_of_spades',
            img: 'src/images/king_of_spades.png',
            pairID: 26
        },
        // BELOW Arrays - shouldn't need to rearrange
        // BACK OF CARDS
        // {
        //     name:'back_of_card',
        //     img:'src/images/blank.png',
        //     pairID: 0
        // },
        // // ALREADY PAIRED CARD - CANNOT SELECT AGAIN
        // {
        //     name:'paired_card',
        //     img:'src/images/white.png',
        //     pairID: 0
        // }
    ]

    console.log(cardArray)
    cardArray.sort(()=> 0.5-Math.random())
    // Math.random returns a random number between 0 and 1
    // If that random is < 0.5 (negative number)
    // If random number is > 0.5 (positive number)
    // You're sorting the cards based on a random number

    // Put our cards into the grid
    // Use query selector for this
    const grid = document.querySelector('.grid')
    let cardsChosen = [] // only allow 2 elements at a time - to compare pairs of cards chosen
    let cardsChosenIDs = []
    let cardsChosenPairIDs = []
    let playerTurn = 0 
    // count = (count+1) % 2 -> toggles between 1 and 0
    let player1Score = 0
    let player2Score = 0
    let player1CardsWon = []
    let player2CardsWon = []
    let resultDisplay1 = document.querySelector('#score1')
    resultDisplay1.textContent = 0 ;
    let resultDisplay2 = document.querySelector('#score2')
    resultDisplay2.textContent = 0 ;

    let turnToggle = document.getElementById('turn')
    function turnOfPlayer(){
        const player1Score = document.getElementById('player-1')
        const player2Score = document.getElementById('player-2')

        // Processing input -> Still need a bug for player 1 and player 2 score
        if (player1Score.value===""){
            player1Score.setAttribute('value', player1Score.getAttribute('placeholder'))
        }
        else{
            player1Score.setAttribute('value', player1Score.value)
        }
        if (player2Score.value===""){
            player2Score.setAttribute('value', player2Score.getAttribute('placeholder'))
        }
        else{
            player2Score.setAttribute('value', player2Score.value)
        }

        if (playerTurn===0){
            turnToggle.innerHTML=player1Score.getAttribute('value')+ "'s turn"
            // turnToggle.innerHTML="Player 1 turn"
            turnToggle.style = "float: left"
        }
        else{
            turnToggle.innerHTML=player2Score.getAttribute('value')+ "'s turn"
            // turnToggle.innerHTML="Player 2 turn"
            turnToggle.style = "float: right"

        }
    }

    function increasePlayerScore(){
        if (playerTurn==0){
            player1Score+=1
        }
        else{
            player2Score+=1
        }
    }

    
    

    function createBoard(){
        for (let i=0 ; i< cardArray.length; i++){
            // Create the card
            const card = document.createElement('img')
           // set attributes of the card
            card.setAttribute('src','src/images/blank.png')
            card.setAttribute('data-id',i)
            card.setAttribute('pairID',cardArray[i].pairID)
            // LISTEN out for clicks on the card
            card.addEventListener('click', flipCard)
            // PUT Card into our grid
            grid.appendChild(card)
        }
    }
    function flipCard(){
        let cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID])
        cardsChosenIDs.push(cardID)
        cardsChosenPairIDs.push(cardArray[cardID].pairID)

        console.log(cardArray[cardID])
        console.log(cardsChosen)
        // we only want to compare 2 cards at a time
        // if they don't match, clear the cards chosen array
        // and start again
        // Each time you clear, specify the turn of player
        // e.g. Player 1 turn ; Player 2 turn
        this.setAttribute('src',cardArray[cardID].img)
        if (cardsChosen.length === 2){
            // doesn't allow the other player to click on cards yet (remove eventListener), while the other player is selecting 2 cards -> until those 2 cards have vanished or are matched up and blanked out
            // only after the 2 cards have gone back to being flipped back over can you allow the remaining cards not paired yet to be selected
            const cards = document.querySelectorAll('img')
            for (let i=0 ; i<cardsChosenIDs.length; i++){
                // cannot select other cards in this timeframe
                console.log('Cannot select other cards for the timebeing')
                for (let j=0 ; j<cards.length ; j++){
                    if(cards[j].getAttribute('data-id')!=i){
                        cards[j].removeEventListener('click',flipCard)
                    }
                }    
            }
            // still trying to figure the bug when the same card is clicked many times, to be able to select a second card
            console.log(cardsChosen)
            if (cardsChosen[0]===cardsChosen[1]){
                console.log('Same card selected')
                // Added these two line

                for (let j=0 ; j<cards.length ; j++){
                    // only add the event listener if cardsChosen = []
                    if(cards[j].getAttribute('src')!=='src/images/blank.png' || cards[j].getAttribute('src')!=='src/images/white.png' ){
                            console.log('Allow the remaining cards to be selected again')
                            cards[j].addEventListener('click',flipCard)
                    }
                }
                cards[cardsChosenIDs[0]].removeEventListener('click',flipCard)
                cardsChosen.pop()
                cardsChosenIDs.pop()
                cardsChosenPairIDs.pop()
            }
            else {
                setTimeout(checkForMatch, 2500) // originally set to 500 -> 500 milliseconds    
            // invokes a function after a certain amount of time has passed
            // check if those 2 cards match with the pair ID
            // if they match, take them off the board
            // if they don't match, flip the card back over
            }
        }
        console.log(cardsChosenIDs)
        console.log(cardsChosenPairIDs)

    }

    function increaseScoreOfCertainPlayer(){
        if (playerTurn==0){
            player1Score+=1
            resultDisplay1.textContent=player1CardsWon.length
        }
        else {
            //playerTurn would be 0 or 1
            player2Score+=1
            resultDisplay2.textContent=player2CardsWon.length
        }
        if (player1CardsWon.length+player2CardsWon.length === (cardArray.length/2)-1){  // when pairs of cards Won total == 25
            checkForWinner()
        }
    }

    function checkForWinner(){
        if (player1CardsWon.length>player2CardsWon.length){
            alert('Player 1 has won')
        }
        else {
            alert ('Player 2 has won')
        }
    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIDs[0]
        const optionTwoId = cardsChosenIDs[1]

        // if(optionOneId == optionTwoId)
        // {
        //     alert('You have picked the same image!')
        //     cards[optionOneId].setAttribute('src','src/images/blank.png')
        //     cards[optionTwoId].setAttribute('src','src/images/blank.png')
        // }

        // check if we have a match
        if (cardsChosenPairIDs[0]===cardsChosenPairIDs[1]){
            alert('You have found a match !')
            
            
            cards[optionOneId].setAttribute('src','src/images/white.png')
            cards[optionTwoId].setAttribute('src','src/images/white.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            
            if (playerTurn==0){
                player1CardsWon.push(cardsChosen)
            }
            else{
                player2CardsWon.push(cardsChosen)
            }
            increaseScoreOfCertainPlayer()
        }

        // what happens if you don't find a match
        // for testing purposes, comment this out to test if the game really completes properly when a winner is found
        else {
            cards[optionOneId].setAttribute('src','src/images/blank.png')
            cards[optionTwoId].setAttribute('src','src/images/blank.png')
        }

        playerTurn=(playerTurn+1)%2
        cardsChosen=[]    
        for (let j=0 ; j<cards.length ; j++){
            // only add the event listener if cardsChosen = []
            console.log(cards[j].getAttribute('src'))
            // if(cards[j].getAttribute('src')!=='src/images/blank.png' || cards[j].getAttribute('src')!=='src/images/white.png' ){
            //         cards[j].addEventListener('click',flipCard) // atm the bug is that paired cards are allowed to be selected again :/ 
            //         // only cards that aren't 
            // }
            if(cards[j].getAttribute('src')==='src/images/blank.png'){
                cards[j].addEventListener('click',flipCard) // atm the bug is that paired cards are allowed to be selected again :/ 
                // only cards that aren't 
        }
        }
        cardsChosenIDs =[]
        cardsChosenPairIDs = []
        turnOfPlayer()
    }

    createBoard()
    turnOfPlayer()
})