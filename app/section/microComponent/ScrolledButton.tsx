"use client";
import Button from "../component/Button";

const ScrolledButton = (props: { buttonval: string }) => {
  const executeScroll = () => {
    if (typeof window !== "undefined")
      window.scrollTo(0, document.body.scrollHeight);
  };
  return <Button funct={executeScroll} buttonval={props.buttonval} />;
};

export default ScrolledButton;
