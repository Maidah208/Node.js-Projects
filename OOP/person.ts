export class Person {
    // Declareing a property 

    personality: string

    constructor() {
        this.personality = 'Mystery' // constructor method initalize the property to the default value 
    }

// This method allows a person to answer a question about their personality
    askQuestion(option: number){
        if (option == 1){
            this.personality = "an Introvert"
        }
        else if (option ==2){
            this.personality = "a Extrovert"
        }
        else{
            this.personality = 'a Mystery'
        }
    }

// This method returns the current value of the personality property.
    getPersonality(){
        return this.personality
    }
}

