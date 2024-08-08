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
var eggCount = 1;
console.log(`
  ${headCount} ${toPlural({
    count: eggCount, 
    single: "egg", 
    })
  }
`);

// 10 eggs
var eggCount = 1;
console.log(`
  ${headCount} ${toPlural({
    count: eggCount, 
    single: "egg", 
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

var headCount = 10;
	// calling the function once
  console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person is", 
    plural: "people are"
    })
  } on your team
`);

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
