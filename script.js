
let girlname = [

"christina",
"kelly",
 "Olivia",
 "nanci",
 "Emma",
 "Charlotte",
 "Amelia",
 "Ava",
 "Sophia",
 "Isabella",
 "Mia",
 "Evelyn",
 "adriana",
 "Harper",
 "jayda",
 "mila",
 "ivy",
 "ezra",
 "jennifer"
];
let boyname = [
"tommy",
"tony",
"chrissy",
"Liam",
 "Noah",
 "Oliver",
 "Elijah",
 "James",
 "William",
 "Benjamin",
 "Lucas",
 "Henry",
 "Theodore",
 "jeffrey",
 "tobi",
 "quin",
 "christan",
 "tyler",
 "elliot"
];

function getGirlName(){
    var randomName1 = girlname [Math.floor(Math.random() * girlname.length)];
    return randomName1;
}
function getBoyName(){
    var randomName2 = boyname [Math.floor(Math.random() * boyname.length)];
    return randomName2;
}
function nameQtyGirl(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if (userQty > 10){
        document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES AT ONCE';
    }else{
        for (var i = 0; i < userQty; i++){
            document.querySelector('.nameList').innerHTML += getGirlName() + '<br>';
        }
    }
}
function nameQtyBoy(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if (userQty > 10){
        document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES AT ONCE';
    }else{
        for (var i = 0; i < userQty; i++){
            document.querySelector('.nameList').innerHTML += getBoyName() + '<br>';
        }
    }
};
