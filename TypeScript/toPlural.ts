//console.clear();
type ToPluralParams = {
  count: number; 
  single: string;
  plural?: string;
}; 



function toPlural({ count, single, plural }: ToPluralParams ): string {
  // If a plural form is supplied and the count is not 1, return the plural form
  if (count !== 1 && plural) {
    return plural;
  }

  // Otherwise, add 's' by default for common words
  return `${single}${count === 1 ? "" : "s"}`;
}

// 1 egg
let eggCount = 1;
console.log(`
  ${eggCount} ${toPlural({
    count: eggCount, 
    single: "egg", 
  })}
`);

// 10 eggs
eggCount = 10;
console.log(`
  ${eggCount} ${toPlural({
    count: eggCount, 
    single: "egg", 
  })}
`);

let headCount = 1;
// calling the function once
console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person", 
    plural: "people"
  })}
`);

headCount = 10;
// calling the function once
console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person", 
    plural: "people"
  })} 
`);

headCount = 1;
// calling the function once
console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person is", 
    plural: "people are"
  })} on your team
`);

headCount = 10;
// calling the function once
console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person is", 
    plural: "people are"
  })} on your team
`);

headCount = 10;
// calling the function multiple times
console.log(`
  ${headCount} ${toPlural({
    count: headCount, 
    single: "person", 
    plural: "people"
  })} ${toPlural({
    count: headCount, 
    single: "is", 
    plural: "are"
  })} on your team
`);

// export default toPlural;
//
