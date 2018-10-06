var randomAdder = () => {
    // create a function that adds together the sum of 15 random numbers between 10 - 100
    ;
    // console.log the total
    
    let total = 0;
    for(let i = 0; i < 15; i++) {
        total += Math.floor(Math.random() * (101 - 10) + 10);
    }
    
    console.log("total");
    
};

randomAdder();