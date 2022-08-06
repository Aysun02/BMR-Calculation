let confirmation = prompt("Welcome, do you want to calculate your BMR, let's GO?");
console.log(confirmation);

    let Name  = prompt("Please input your Name:")
    console.log(Name);

    let Weight  = prompt("Please input your Weight with Kilogram:")
    console.log(Weight);

    let Height = prompt("Please input your Height with Meters:")
    console.log(Height);

    let Calculate=  Weight/ Height ** 2;
    console.log("Your BMR is-" + Calculate);


        if(Calculate<=18.5) 
        {
        console.log("Dear "+Name+ ",Your Body Mass Index is-UnderWeight!") 
        }
        
        else if (Calculate>18.5 && Calculate<=24.9) 
        {
            console.log("Dear "+Name+ ",Your Body Mass Index is-Normal!") 
        }
        
        else if (Calculate>=25 && Calculate<=29.9) 
        {
            console.log("Dear "+Name+ ",Your Body Mass Index is-OverWeight!") 
        }
        
        else if (Calculate>=30 && Calculate<=34.9) 
        {
            console.log("Dear "+Name+ ",Your Body Mass Index is-Obese!") 
        }
        
            else {
            console.log("Dear "+Name+ ",Your Body Mass Index is-Extremly Obese!") 
            }
