
const darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true,
  };  
  
  darthVader.children = 2;
  darthVader.childNames = ['Luke', 'Leia'];  
 
  console.log(darthVader.children);
  console.log(darthVader.childNames[0]);  
  
  for (const key in darthVader) {
    const value = darthVader[key];
    console.log(`${key}: ${value}`);  }
  
  
  darthVader.allegiance = "The light side";  

  console.log(darthVader);  
  
  delete darthVader.children;
  
  console.log(darthVader);

  let{allegiance, weapon, sith, childNames} = darthVader;

  console.log("allegiance:", allegiance);
  console.log(" weapon:", weapon);
  console.log(" sith:", sith);
  console.log("childnames:", childNames);

  for (const key in darthVader) {
    delete darthVader[key];
  }
  
  console.log("Darth Vader Cleared:", darthVader);
  