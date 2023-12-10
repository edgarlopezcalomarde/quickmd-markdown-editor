import clsx from "clsx";
import {
  DonwloadIcon,
  FullScreenIcon,
  ImportIcon,
  LinkIcon,
  SwapIcon,
} from "../lib/icons";

const Button = ({ children, action, className }) => {
  return (
    <button
      type="button"
      onClick={() => action()}
      className={clsx("p-2 rounded border", className)}
    >
      {children}
    </button>
  );
};

Button.fullscreen = ({ action }) => {
  return (
    <Button action={action} className="hidden lg:block">
      <FullScreenIcon />
    </Button>
  );
};

Button.swap = ({ action }) => {
  return (
    <Button action={action} className=" lg:hidden">
      <SwapIcon />
    </Button>
  );
};

Button.download = ({ action }) => {
  return (
    <Button action={action}>
      <DonwloadIcon />
    </Button>
  );
};

Button.import = ({ action }) => {
  return (
    <Button action={action}>
      <ImportIcon />
    </Button>
  );
};

Button.link = ({ action }) => {
  return (
    <Button action={action}>
      <LinkIcon />
    </Button>
  );
};

export default Button;
