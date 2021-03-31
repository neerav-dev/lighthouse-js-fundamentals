const smartGarbage = function(trash, bins) {
  let result = {
    waste: trash === 'waste' ? bins["waste"] + 1 : bins["waste"],
    recycling: trash === 'recycling' ? bins["recycling"] + 1 : bins["recycling"],
    compost: trash === 'compost' ? bins["compost"] + 1 : bins["compost"]
  };

  return result;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));