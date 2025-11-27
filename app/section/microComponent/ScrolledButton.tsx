"use client";
import Button from "../component/Button";

const ScrolledButton = (props: { buttonval: string }) => {
  const executeScroll = () => {
    if (globalThis.window !== undefined)
      window.scrollTo(0, document.body.scrollHeight);
  };
  return <Button funct={executeScroll} buttonval={props.buttonval} />;
};

export default ScrolledButton;
