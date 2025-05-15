//console.clear()
function toPlural( {count, single, plural} = {}) {
  //plural value for words such as goose - geese, mouse - mice, bus-buses etc
  //if a plural is supplied and the count exceeds 1, use the plural
  if (count !== 1 && plural) {
    return plural; 
  } 
  //if not, add s by default for popular words such s
  return `${single}${count === 1 ? "" : "s"}`;
};



// 1 egg
let eggCount = 1;
console.log(`
  ${eggCount} ${toPlural({
    count: eggCount, 
    single: "egg", 
    })
  }
`);

// 10 eggs
eggCount = 10;
console.log(`
  ${eggCount} ${toPlural({
    count: eggCount, 
    single: "egg", 
    })
  }
`);






let headCount = 1;
	// calling the function once
  console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person", 
    plural: "people"
    })
  }
`);

headCount = 10;
	// calling the function once
  console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person", 
    plural: "people"
    })
  } 
`);

//We can also be smart to use our function to get the verb for plural words or words that change plural form 
//E.g 
//Buses are (correct)
//Bus is (correct)
//Buses is (wrong)
//Bus are (wrong)
//

headCount = 1;
	// calling the function once
  console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person is", 
    plural: "people are"
    })
  } on your team
`);


headCount = 10;
	// calling the function once
  console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person is", 
    plural: "people are"
    })
  } on your team
`);

headCount = 10
  //calling the function multiple times
  console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person", 
    plural: "people"
    })
  } ${toPlural({
    count: headCount, 
    single: "is", 
    plural: "are"
    })
  } on your team
`);

export default toPlural
