 console.log(hello);                                  
var hello = 'world';  

    var hello; //1 
     console.log(hello); // undefined
    var hello = "world";
//////////////////////
    var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

var needle; //2
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}

needle = 'haystack';
test();
//////////////////////
var brendan = 'super cool';//3
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}

brendan = 'super cool';
console.log(brendan);
/////////////////////

var food = 'chicken'; //4
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}

food = 'chicken';
console.log(food);
eat();

//////////////5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

///////////6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}

console.log(genre);
genre = "disco";
rewind();
console.log(genre);

/////////////7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);



var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}

dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
