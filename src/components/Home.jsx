export default function Home({age}) {  //(props)
  let name = "John"
  return  ( 
  <div>
    <div >Hello {name}. you are {age} years old</div>
    <p>This is paragraph</p>
  </div>  // alway use one paraent componet
  );
}