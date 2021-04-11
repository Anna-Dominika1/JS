const cafe = {
    name: "Republic",
    width:200,
    height: 300,
    personal:5,
    hr: true 
}



  

  const cafes = Object.entries(cafe);
  
  for (const entry of cafes) {
    const key = entry[0];
    const value = entry[1];
  
    console.log(`${key} - ${value}`);
  }


  console.log( "Площа кафе :", cafe.width*cafe.height)