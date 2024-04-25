const fevMovie = "avatar";
let guess=prompt("guess fevourate movie");
while ((guess != fevMovie) && (guess != "quit")) {
    guess=prompt("wrong guess!" ,"try again");

}
if (guess==fevMovie){
    console.log("congrats!");
} else {
    console.log("you quit");
}


let fruits = ["mango","guava","graps","banana","litchi"];
fruits.push("pineapple");
for (i=0; i<fruits.length;i++) {
console.log(i,fruits[i]);
 ` `}
