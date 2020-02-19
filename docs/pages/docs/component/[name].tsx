import { useRouter } from "next/router";

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
      Component name: {name} <br />
      <br />
      <Button>aa</Button>
    </p>
  );
};

export default Post;
