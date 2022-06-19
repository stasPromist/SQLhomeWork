const mongoose = require("mongoose");
const owne = require("./owner");
const vet = require("./Veterinarian");
const pet = require("./Pet");


try {
    mongoose.connect("mongodb://localhost:27017/PETS");
    console.log("Connected");
} catch(e) {
    console.log(error);
} 
// async function Insert() {
//     const NewOwner1 = new owne({
//         FirstName: "Stas",
//         LastName: "Barsky",
//         Email: "ctacbars@gmail.com",
//         Age: 37,
//         veterinarians: "629cbef66040525a301c4355",
//         pets:["629cbe416040525a301c432f"]
//         });
//     await NewOwner1.save();
//     console.log(NewOwner1);
// };
// Insert();
// async function Insert() {
//     const NewOwner2 = new owne({
//         FirstName: "Stanislav",
//         LastName: "Barskiy",
//         Email: "ctacbars@gmail.com",
//         Age: 38,
//         veterinarians: "629cbf056040525a301c435b",
//         pets:["629cbe576040525a301c4335"]
//         });
//     await NewOwner2.save();
//     console.log(NewOwner2);
// };
// Insert();
// async function Insert() {
//     const NewOwner3 = new owne({
//         FirstName: "Inga",
//         LastName: "Barskaya",
//         Email: "ing@gmail.com",
//         Age: 38,
//         veterinarians: "629cbf176040525a301c4361",
//         pets:["629cbe766040525a301c433b"]
//         });
//     await NewOwner3.save();
//     console.log(NewOwner3);
// };
// Insert();
// async function Insert() {
//     const NewOwner4 = new owne({
//         FirstName: "David",
//         LastName: "Fran",
//         Email: "david@gmail.com",
//         Age: 50,
//         veterinarians: "629cbf176040525a301c4361",
//         pets:["629cbe766040525a301c433b", "629cbe576040525a301c4335", "629cbe416040525a301c432f" ]
//         });
//     await NewOwner4.save();
//     console.log(NewOwner4);
// };
// Insert();
  
async function findOwner(name) {
    const Baal = await owne.find(name);
// console.log(Baal);
    Baal.forEach(async(element)=>{
        element.pets.forEach(async(pety) =>{
        console.log(await pet.find({"_id":pety}));
});
// async function findOwner(name) {
//     const Baal = await owne.find(name);

//     // console.log(Baal);
    Baal.forEach(async(element)=>{
        element.veterinarians.forEach(async(vety) =>{
        console.log(await vet.find({"_id":vety}));
});
    });
    
    });
}
findOwner({FirstName:"David"});









   
