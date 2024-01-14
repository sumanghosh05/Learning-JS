const student ={
    suman : 98 ,
    arka  : 99 ,
    surja : 97
}
//using for-loop
for(let i=0; i<Object.keys(student).length; i++){

    console.log(Object.keys(student)[i]+ " " +student[Object.keys(student)[i]])

}



// "for-in" loop does it operations with objects KEYS
for(let a in student){ //a takes all the names here by each iterations
    console.log(a+" "+ student[a])// student[a] takes the "Values of the Keys" by each iterations. 
}