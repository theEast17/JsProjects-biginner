const heading=document.querySelector("#heading");
const quotes=document.querySelector("#quotes");
const bodybuilder=document.querySelector("#bodybuilder");
const click=document.querySelector("#click");


const words=[
    {
        quote:" 'Strength does not come from winning.Your struggles develop your strengths.When you go through hardships and decide not to surrender that is strength' ",
        man:"Arnold Schwarzengegger"
    },
    { 
        quote:" 'never give up great things take time' ",
        man:"Frank Zane"
    },
    {
        quote:" 'To be champion you must act like one,act like a champion' ",
        man:"Lou Ferringo"
    },
    {
        quote:" 'The worst thing i can be is the same as everybody else.i hate that' ",
        man:"Arnold schwarzengegger"
    },
    {
        quote:" 'I do not eat for taste,i eat for function' ",
        man:"Jay cuttler"
    },
    {
        quote:" 'If you do not learn from your mistakes, then they becomes regrets' ",
        man:"John cena"
    },
    {
        quote:" 'consistency is the best key to achieve your goals..!' ",
        man:"The East"
    },
    {
        quote:" 'Nothing come easy ,but as long as you are breathing ,you are always one breath always from making your dreams a reality. make every breath count.' ",
        man:"Kay Greene"
    }
]

click.addEventListener("click",function(){
    const random=Math.floor(Math.random()*words.length);
    // console.log(random);
    quotes.innerText=words[random].quote;
    bodybuilder.innerText=words[random].man;
    console.log(random);
    
})