let coinFlip = Math.round(Math.random() * 100);
const choice = prompt('Choose "Heads" or "Tails".').toLowerCase();

console.log(coinFlip, choice, ' --- starting values');


if(choice != 'heads' && choice != 'tails'){

    alert('Your selection was invalid.  Try again.');
 
}else{

    if(coinFlip <= 50){
        coinFlip = 'heads';
        
        console.log(coinFlip, choice, ' -- pt1');

        if(choice === 'heads'){
            console.log(coinFlip, choice, ' -- pt1 and half');
            alert('The flip was heads and you chose heads...you win!');
        }else if(choice === 'tails'){
            alert('The flip was heads but you chose tails...you lose!');
        }else{
            alert('Error - coinflip decision undetermined in HEADS. Try again.');
        };

    }else if(coinFlip > 50){
        coinFlip = 'tails';

        console.log(coinFlip, choice, ' -- pt2');

        if(choice === 'tails'){
            alert('The flip was tails and you chose tails...you win!');
        }else if(choice != 'tails'){
            alert('The flip was tails but you chose heads...you lose!');
        }else{
            alert('Error - coinflip decision undetermined in TAILS. Try again.');
        };
    };

};

console.log(coinFlip, ' -- should be heads (1-50) or tails (51-100)', choice);