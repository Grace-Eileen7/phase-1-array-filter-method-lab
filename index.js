// Code your solution here
//1.findMatching(drivers, query)
function findMatching(drivers, query) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === query.toLowerCase()
  );
} // to return all drivers whose names match the query, case-insensitively.

//2.fuzzyMatch(drivers, query)
function fuzzyMatch(drivers, query) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
} //Returns all drivers whose names start with the query string, case-insensitively.

//3. matchName(drivers, query)
function matchName(drivers, query) {
  return drivers.filter((driver) => driver.name === query);
} // Returns all driver objects where the name property exactly matches the query string.

/* const drivers = [
  { name: "Bobby", hometown: "New York" },
  { name: "Sammy", hometown: "Los Angeles" },
  { name: "Sally", hometown: "Cleveland" },
  { name: "Annette", hometown: "Chicago" },
  { name: "Bobby", hometown: "Tampa Bay" }
];

findMatching(["Bobby", "Sammy", "Sally"], "bobby"); 
// → ["Bobby"]

fuzzyMatch(["Bobby", "Sammy", "Sally"], "Sa"); 
// → ["Sammy", "Sally"]

matchName(drivers, "Bobby"); 
// → [
//   { name: "Bobby", hometown: "New York" },
//   { name: "Bobby", hometown: "Tampa Bay" }
// ]
*/
