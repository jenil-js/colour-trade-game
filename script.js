function result (playeropt){
    const choice = document.querySelectorAll("span");

    const options = ['rock','scissor','paper'];
    let compopt = Math.floor(Math.random()*options.length);
    const comopt = (options[compopt]);
    choice[0].textContent = playeropt;
    choice[1].textContent = comopt;

    if(playeropt === "rock" && comopt === "scissor" || playeropt === "paper" && comopt === "rock" || playeropt === "scissor" && comopt === "paper")
        {
            console.log("Win")
            choice[2].textContent = "Win";
            console.log(choice[2]);
            
        }
        else if (playeropt === comopt )
        {
            console.log("Tie")
            choice[2].textContent = "Tie";
        }
        else 
        {
            console.log("Lose")
            choice[2].textContent = "Lose";
        }
}