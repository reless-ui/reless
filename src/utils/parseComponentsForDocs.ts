const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");

// @ts-ignore
const isDirectory = source => lstatSync(source).isDirectory();
// @ts-ignore
const getDirectories = source =>
  readdirSync(source)
    // @ts-ignore

    .map(name => join(source, name))
    .filter(isDirectory);

const parse = () => {
  // @ts-ignore

  // console.log("PARSEda!", getDirectories("./src/"));
  //getProps("../src/Tag/tag.tsx");
  const { Button } = require("../index.js");
  console.log("COMPILE aspon", Object.keys(Button));
};

export default parse;
