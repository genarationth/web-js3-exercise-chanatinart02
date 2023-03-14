function grad(score){

    if(score > 11 || score < 0){
        return 'the score only 1-11 try again'
    } else if(score === 11){
        console.log('Perfect')
    } else if(score > 8){
        console.log('Excellent')
    } else if( score >= 5){
        console.log('you pass') 
    } else {
        return 'false'
    }
}

console.log(grad(5))