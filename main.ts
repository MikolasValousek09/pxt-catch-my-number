let myGuess: number = 10
let playAgain: boolean = true

basic.showString("Uhodni cislo")

while (playAgain) {
    let secretNumber: number = randint(1, 25)
    let guessed: boolean = false

    while (!guessed) {
        whaleysans.showNumber(myGuess)

        // Zmenšení čísla tlačítkem A
        if (input.buttonIsPressed(Button.A)) {
            myGuess -= 1
            if (myGuess < 1) myGuess = 1 // Omezíme na minimální hodnotu
            whaleysans.showNumber(myGuess)
        }

        // Zvýšení čísla tlačítkem B
        if (input.buttonIsPressed(Button.B)) {
            myGuess += 1
            if (myGuess > 25) myGuess = 25 // Omezíme na maximální hodnotu
            whaleysans.showNumber(myGuess)
        }

        // Kontrola odpovědi při stisknutí loga
        if (input.logoIsPressed()) {
            if (myGuess < secretNumber) {
               
                   
                
            } else if (myGuess > secretNumber) {
                
                    
                   
                
            } else {
                basic.showString("Win")
                guessed = true
            }
        }

        basic.pause(100) // Krátká pauza, aby se předešlo nechtěnému opakování stisků
    }

    // Zeptáme se hráče, zda chce hrát znovu
    basic.showString("Again?")
    if (input.buttonIsPressed(Button.A)) {
        playAgain = true
        myGuess = 10 // Resetujeme tip
    } else {
        playAgain = false
        basic.showString("Bye!")
    }
}