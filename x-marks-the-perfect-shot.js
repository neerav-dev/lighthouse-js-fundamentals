/**
 * Your function will receive an array of moves, which are strings that say either north, south, west, or east, 
 * these represent the parade moving in a particular direction by a single space on the grid. 
 * By looking at the path that the parade moves in, your function should calculate and then return an array 
 * representing the position of the parade after completing all of the moves. The first element of the array 
 * should be the X position, and the second element of the array should be the Y position. 
 * The parade begins at [0,0].
 */

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  let x = 0;
  let y = 0;

  let coordinate;

  //looping thru all the moves
  for (let index = 0; index < moves.length; index++) {
    //fetching each moves
    const element = moves[index];
    //logic to increment and decrement values of x and y axis depending on moves
    switch (element) {
      case 'north':
        y++;
        break;
      case 'south':
        y--;
        break;
      case 'west':
        x--;
        break;
      case 'east':
        x++;
        break;
    }
  }
  coordinate = [x,y];
  return coordinate;
}


finalPosition(moves);