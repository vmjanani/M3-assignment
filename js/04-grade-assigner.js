const grade = prompt('Enter a grade between 1-100.');

// If statement to first validate 'grade' value to be within 1-100. If valid, grade letter will display. If not valid, error will display.

if (grade >= 1 && grade <= 100){

    if(grade >= 90 & grade <= 100) {
        console.log('You received an A.');
    }else if(grade >= 80 & grade <= 89){
        console.log('You received an B.');
    }else if(grade >= 70 & grade <= 79){
        console.log('You received an C.');
    }else if(grade >= 60 & grade <= 69){
        console.log('You received an D.');
    }else{
        console.log('You received an F.');
    };

}else{
    console.log('Input is invalid. Only numbers from 1-100 are accepted. ');
};
