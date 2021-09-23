// // OBJECTS SYNTAX 

// const exampleObject = {
//  key : "value", //  COMMA FOR OTHER KEYS
//  types : "any",
//  method(){
// //  DO SOMETHING
// // this keyword is refer to the object 
// return this.key + " " + this.types;
//     }
// }

// //  ACCESS OBJECTS 
// //  DOT NOTATION 
// console.log(exampleObject.key)
// console.log(exampleObject.types)


// // CALLING A METHOD
// console.log(exampleObject.method())

// // SQUARE BRACKETS
// console.log(exampleObject["key"]);
// console.log(exampleObject["types"]);


// // ADDING NEW KEW TO AN OBJECT 
// exampleObject.newKey = "new value";

// console.log(exampleObject)
// const studentContainer = document.querySelector(".students-container");

// studentContainer.style.border = "50px solid red";


const person = {
    firstName: "James",
    lastName: "Harrison",
    quote: "Whoops",
    skills: ["html", "css", "javascript"],
    imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    getSkillsHTML(){
        const skillsHTML = this.skills.map(skill => `<li>${skill}<li>`);
        console.log(skillsHTML);
        return skillsHTML.join("\n");
    },
    getPersonHTML(){
        const personHTML =`<article class="student-card">
<img src=${this.imgURL} />
<h2>${this.getFullName()} </h2>
<blockquote>${this.quote}</blockquote>
<h3>Skills</h3>
<ul>${this.getSkillsHTML()}<ul>
</article>
`;
return personHTML;
    },
};

// studentContainer.innerHTML = person.getPersonHTML();
// for (let index = 0; index < 10; index++){
//     studentContainer.innerHTML += person.getPersonHTML();
// }



// ADD A METHOD ONTO THE PERSON OBJECT THAT RETURNS THE SAME HTML
// I WANT YOU TO USE 'THIS' KEYWORD
// ADD IT TO THE HTML




// WRITE A METHOD ON THE PERSON OBJECT THAT USES THE SKILLS ARRAY
console.log(person.getSkillsHTML());
person.age = 22;
// console.log(person);
// //  LOG FULL NAME ONTO THE CONSOLE 
// console.log(person.firstName + " " + person.lastName)

// // GET RESULT OF THE METHOD (METHOD = GETFULLNAME) ONTO THE CONSOLE
// console.log(person.getFullName())

// CLASS SYNTAX

// pascalCase -> naming convention for classes
class ExampleClass {
    constructor(firstName, lastName, age){
        (this.firstName = firstName),  (this.lastName = lastName), (this.age = age);
    }


    greet() {
        return `Hi my name is ${this.firstName} ${this.lastName}`;
    }
}

// CLASS INHERINTEANCE SYNTAX

class ExtendedClass extends ExampleClass {
    constructor(firstName, lastName, age, subject){
        super(firstName, lastName, age), (this.subject = subject);
    }

    greet(){
        return `Hi I am Mr ${this.lastName} I will teach you ${this.subject}`;
    }
}

console.log(new ExtendedClass("James", "Harrison", 22, "javascript").greet());

// const exampleOne = new ExampleClass("James", "Harrison", 22);
// const exampleTwo = new ExampleClass("Caius", "Haines", 26);

// console.log(exampleOne.greet());
// console.log(exampleTwo.greet());

class Profile {
    constructor (firstName, lastName, quote, skills, imgURL){
        (this.firstName = firstName),
        (this.lastName = lastName),
        (this.quote = quote),
        (this.skills = skills),
        (this.imgURL = imgURL);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getSkillsHTML(){
        const skillsHTML = this.skills.map(skill => `<li>${skill}<li>`);
        return skillsHTML.join("\n");
    }
    getProfileHTML(){
        const ProfileHTML =`<article class="student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}<ul>
        </article>
        `;
        return ProfileHTML;
    }
}



class PremiumProfile extends Profile {
    constructor(firstName, lastName, quote, skills, imgURL, contactlink){
        super(firstName, lastName, quote, skills, imgURL),
        this.contactlink = contactlink
    }
    getProfileHTML(){
        const ProfileHTML =`<article class="student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}<ul>
        <a href=${this.contactlink}>Lets get in touch!</a>
        </article>`;
        console.log(ProfileHTML)
        return ProfileHTML;
    }
}

    const studentContainer = document.querySelector(".student-container");
    const James = new PremiumProfile(
    // "James",
    "Harrison",
    "Whoops",
    ["html", "css", "javascript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
    // "https://developer.mozilla.org/en-US/"
    // https://developer.mozilla.org/en-US/
    );
    console.log(James)
    const exampleUno = new Profile(
        "Caius",
        "Haines",
        "whoops",
        ["html", "css", "javascript"],
        "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
    );
        console.log(exampleUno)
    const exampleDuo = new Profile(
        "Annabelle",
        "Harrison",
        "Whoops",
        ["html", "css", "javascript"],
        "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
    );


// studentContainer.innerHTML += James.getProfileHTML.getProfile();
// studentContainer.innerHTML += exampleUno.getProfileHTML();
// studentContainer.innerHTML += exampleDuo.getProfileHTML();