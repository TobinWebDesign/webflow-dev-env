(() => {
  // src/hellowworld.js
  function greet() {
    console.log("Hello from hollow world");
  }

  // src/newfile.js
  function test() {
    console.log("TEST");
  }
  var newfile_default = test;

  // src/index.js
  greet();
  newfile_default();
})();
