const http = require("http");

// console.log(process.argv);

const paramsArr = process.argv.splice(2);

let str = paramsArr.reduce((p, val) => {
  if(val.startsWith("date")) {
    const [name, value = ""] = val.split("=");
    return p + name + "=" + new Date(value.replace("Date:", "").trim()).getTime();
  }
  return p + val + "&"
}, "")


let url = `http://10.197.6.240:3000/autoBuild?appName=karp_dipper&${str}`

console.log(url);

http.get(url)


