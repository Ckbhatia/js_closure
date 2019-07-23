// Create the execution context flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value(); // 0
counter.increment(); // 1
counter.increment(); // 2
counter.value(); // 2
counter.decrement(); // 1
counter.value(); // 1

/*
  counter.value(); Returns the value of the pirvateCounter 0
  counter.increment(); Increments the privateCounter's value by 1 and returns undefined
  counter.increment(); Increments the privateCounter's value by 1 and returns undefined
  counter.value(); Returns the value of the pirvateCounter 2
  counter.decrement(); Decrements the privateCounter's value by 1 and returns undefined
  counter.value(); Returns the value of the pirvateCounter 1
*/