function plays()
{
    document.getElementById("play").innerHTML = "START";
}

let blackjackgame = {
    'you':{'scorespan':'#Y-result','div':'#Y-box','score':0},  
    'dealer':{'scorespan':'#D-result','div':'#D-box','score':0},
    'cards': ['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
    'cardvalue': {'A':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13},
};

const YOU = blackjackgame['you']
const DEALER = blackjackgame['dealer']

function randomcard(){
    let randoms = Math.floor(Math.random() * 13);
    return blackjackgame['cards'][randoms];
}

function hitme(){
    let card = randomcard();
    console.log(card);
    let cardimage = document.createElement('img');
    cardimage.src = `image/${card}.jpg`;
     
    if (YOU['score'] >=20){
        document.querySelector(DEALER['div']).appendChild(cardimage);
        DEALER['score'] += blackjackgame['cardvalue'][card];
        document.querySelector(DEALER['scorespan']).textContent = DEALER['score'];
        if (DEALER['score'] >= 30){
            document.querySelector(YOU['div']).appendChild(cardimage);
            YOU['score'] += blackjackgame['cardvalue'][card];
            document.querySelector(YOU['scorespan']).textContent = YOU['score'];
        }
        /*if (YOU['score'] >=31){
            document.querySelector(DEALER['div']).appendChild(cardimage);
            DEALER['score'] += blackjackgame['cardvalue'][card];
            document.querySelector(DEALER['scorespan']).textContent = DEALER['score'];
        }
        if (DEALER['score'] >= 31){
            document.querySelector(YOU['div']).appendChild(cardimage);
            YOU['score'] += blackjackgame['cardvalue'][card];
            document.querySelector(YOU['scorespan']).textContent = YOU['score'];
        }*/
    } else {
        document.querySelector(YOU['div']).appendChild(cardimage);
        YOU['score'] += blackjackgame['cardvalue'][card];
        document.querySelector(YOU['scorespan']).textContent = YOU['score'];
    } 
}
//hitme();

function blackjackdeal(){
    let yourimage = document.querySelector('#Y-box').querySelectorAll('img');
    let dealerimage = document.querySelector('#D-box').querySelectorAll('img');
    for(let i=0;i < yourimage.length;i++){
        yourimage[i].remove();
    }  
    for(let i=0;i < dealerimage.length;i++){
        dealerimage[i].remove();
    }
    document.querySelector(YOU['scorespan']).textContent = 0;
    document.querySelector(DEALER['scorespan']).textContent = 0;
}

function result(){
    let y = YOU['score'];
    document.getElementById("w").innerHTML = y;
    let d = DEALER['score'];
    document.getElementById("l").innerHTML = d;
    if (YOU['score'] == DEALER['score']){
        document.getElementById("d").innerHTML = "Draw";
    }
    win(y,d);
}

function win(yvalue,dvalue){
    if (yvalue >= dvalue){
        document.getElementById("win").innerHTML = "You Win";
    }else if (yvalue <= dvalue){
        document.getElementById("win").innerHTML = "Dealer Win";
    }else //(winvalue == lossvalue)
        document.getElementById("win").innerHTML = "Draw";  
}