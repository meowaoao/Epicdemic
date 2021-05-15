// Dialogue for the Theatre Lobby
let kiosk = {
    interact: 'You try to use the ticket kiosk...',

    cost: "Tickets are $8.50",

    buy: {
        success: 'You successfully buy a ticket from the kiosk',
				noMoney: "It appears you don't have enough money for this ticket", 
				alreadyHave: ""
    }
}

let ticketWindow = {
    interact: 'Hello! How can I help you?',

    question: {
        /* When do the movies start? */
        answer1: "They start at 6PM everyday",

        /* How are you still open? */
        answer2: "We have implemented the necessary precautions in order to stay open. There are things we do such as the immediate sanitation of seats and only selling pre-packaged items.",

        /* How much are tickets? */
        answer3: "Tickets are $8 each!"
    },

    buy: {
        success: "Wonderful, here is your ticket! Enjoy the show!",

				noMoney: "It appears that you don't have enough money for this ticket.",
				
				alreadyHave: "You already have a ticket!"
    }
}

let theatreEntrance = {
    interact: "Would you like to enter?",

    success: "Entering the theatre",

		failure: "You need a ticket past this point",
		
		noMovie: "There's no movie playing right now. Come back at 6PM"
}

let largeSofa = {
    interact: "A lady is sitting on the sofa. Do you want to sit beside her?"
}

let smallSofa = {
    interact: "There is an empty sofa. Do you want to wait here until the movie starts?"
}

let seats = {
    goodSeat: "You made a good decision",
    badSeat: "The lady started coughing. (You probably shouldn't have sat here)"
}

let sofa = {
    sit: "This sofa is so comfy",
    notSit: 'Never mind'
}

let wait = {
	movie_started: "The movie has already started!",
	movie_ended: "The movie has already ended! Come back tomorrow.",
	wait: "You wait until 6PM."
}

let Jon = "Jon: I've been waiting for this movie for a while! We should go to the pub later!"

export let sceneText = {
    theatreEntrance: theatreEntrance,
    ticketWindow: ticketWindow,
    kiosk: kiosk,
    largeSofa: largeSofa,
    smallSofa: smallSofa,
    seats: seats,
		sofa: sofa,
		wait: wait,
		Jon: Jon
}