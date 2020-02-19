import { useRouter } from "next/router";
import * as React from "react";

const buttonProps = [
  {
    name: "",
    description: "",
    type: "",
    defaultValue: ""
  }
];

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  const theComponent = require("reless");
  const { Button } = theComponent;
  // console.log("ttta", <Button/>);
  // type aa = typeof Button.defaultProps;

  // @ts-ignore
  // const InputProps = React.ComponentProps< Button>;

  console.log("aa", React.cloneElement(Button, {})); //JSON.stringify(Button));

  return (
    <p>
      Component Button spešlname: {name} <br />
      <br />
      <Button>aa</Button>
      <h3>Tabulka</h3>
    </p>
  );
};

// @ts-ignore
Post.getLayout = page => {
  console.log("paggbbb", page);
  return <div>getlyyouotbb {page}</div>;
};

export default Post;
