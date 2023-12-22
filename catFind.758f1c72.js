fetch("https://jsonplaceholder.typicode.com/users").then((function(o){if(!o.ok)throw new Error(o.status);return console.log("response",o),o.json()})).then((function(o){console.log("data",o)})).catch((function(o){console.log("error",o)}));
//# sourceMappingURL=catFind.758f1c72.js.map
