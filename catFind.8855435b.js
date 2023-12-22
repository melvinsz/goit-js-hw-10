fetch("https://jsonplaceholder.typicode.com/users").then((o=>{if(!o.ok)throw new Error(o.status);return console.log("response",o),o.json()})).then((o=>{console.log("data",o)})).catch((o=>{console.log("error",o)}));
//# sourceMappingURL=catFind.8855435b.js.map
