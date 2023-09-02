//object

//PERSON/USER
// CAR

//Have two things

const user = {
    //properties (description)
    id: '123',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'b.s@aex.com',
    age: 30,
    isloggedIn: false,
    //examples or more complex
    // top6Friends: ['2', '55', '99'],
    // settings: {
    //     darkMode: false,
    //     twoFA: {
    //         isOn: true,
    //         type: 'email'
    //     }
    // }

    //methods  (behavior)
    signIn: function () {
        this.isloggedIn = true
    },

    signOut: function () {
        this.isloggedIn = false
    }
};

user.firstName;
user.signIn();

const car1 = {
    make: 'Honda',
    model: 'Accord',
    year: 1999,
    color: 'black',
    noise: 'Honk Honk',
    topSpeed: 120,
    currentSpeed: 0,
    needsTuneUp: false,

    honk: function () {
        console.log(this.noise);
    },

    acc: function (num) {
        if (this.currentSpeed > this.topSpeed) {
            this.currentSpeed += num
        }
    },
    checkForTuneUp: function () {
        return this.needsTuneUp
    },
}

class CAR {
    constructor(make, model, year, noise, speed) {
        this.make = make
        this.model = model
        this.year = year
        this.noise = noise
        this.speed = speed
    }

    honk() {
        console.log(this.honk)
    }

    getSpeed() {
        return this.speed
    }
}
            //new creates new object but uses car class. 
const car5 = new CAR('Honda', 'Accord', 2000, "beep beep")
const car6 = new CAR('Chev', 'Cruise', 1985, "beep beep")
car5.honk();
console.log(car5.getSpeed());


