

// Massage input string into something we can use since many shells strip out the "'" characters from args
var args = process.argv.slice(2)
                  .join('').replace(']','').replace('[','').replace(' ','')
                  .split(',');


var dependencyChains = [];

args.forEach(function (val, index, array) {
  var dependencyPair = val.split(':');
  // console.log(dependencyPair);

  var foundMatch = false;
  dependencyChains.forEach(function(dependencyChain) {
    var firstDependency = dependencyChain[0];
    var lastDependency = dependencyChain[dependencyChain.length - 1];
    if(lastDependency == dependencyPair[0]) {
      foundMatch = true;
      if(dependencyPair[1] == " ") {
        return;
      }
      if(firstDependency == dependencyPair[1]) {
        throw new Error("Error: Dependencies create circular dependency for " + firstDependency);
      }
      dependencyChain.push(dependencyPair[1]);
    }
  });
  if(!foundMatch) {
    dependencyChains.push(dependencyPair);
  }

});
