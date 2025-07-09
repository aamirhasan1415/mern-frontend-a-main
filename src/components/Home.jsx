// export default function Home({age}) {  //(props)
//   if(age>18) return <h1>Welcome</h1>
//   else return <h1>Not Allowed</h1>     // conditional rending based on props
// }

// export default function Home({age}) { 
//   {
//     return age > 18 ? <h2>Welcome</h2> : <h2>Not Allowed</h2>
//   }   
// }

// export default function Home({age}) { 
//   {
//     return age > 18 && <h2>Welcome</h2>
//   }   
// }

// export default function Home({age}) { 
//     const handleClick = () => {
//         alert ("Hello");
//     };

//     const handleSubmit = (name) => {
//         alert (`Hello ${name}`);
//     };


//     return (
//     <>
//     <h2>Hello World</h2>
//     <button onClick={handleClick}>Click</button>
//     <button onClick={() => handleSubmit("John")}>Submit</button>
//     </>   
//     )
// }
import { useState } from "react";

export default function Home() {
    const [score, setScore] =useState(0);
    const increment = () =>{
        setScore(score+1);
    }
    return (
        <>
        <p>{score}</p>
        <button onClick={increment}>+ score</button>
        <button onClick={decrement}>-</button>
        </>
    );
}