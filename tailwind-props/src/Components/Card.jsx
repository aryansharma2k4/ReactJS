import React from "react";
//here props are defined by the react itself where it is a object and you can also pass and object with using . operation to use it different types
//instead of passing a variable you can also pass a object containing various information
//you can pass more than two things instead of props
//also you can give a default value bu putting it equal to the default value and will used if it is not passed in the components
function Card({someObj, btnText}){
    return(
        <h1 className="bg-blue-400">
            This is a card Component made by {someObj.username} whose age is just {someObj.age} and the button text is {btnText}
        </h1>
    )
}
 export default Card