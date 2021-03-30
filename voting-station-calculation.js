/*Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
*/
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//chooseStations logic
function chooseStations(stations) {
  //decale local variable to store result array
  let result = [];
  let index = 0;

  //loop thru stations
  for (let i = 0; i < stations.length; i++) {
    //fetch each station array
    let element = stations[i];
    //check if the station has atleast 20 capacity and is school or community centre 
    if (element[1] >= 20 && (element[2] === 'school' || element[2] === 'community centre')) {
      //adding choosed station to result array
      result[index++] = element[0];
    }
  }
  //return the result array
  return result;
}

chooseStations(stations);

console.log(chooseStations(stations));