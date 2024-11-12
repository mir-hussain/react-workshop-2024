import { createContext, useState, use } from "react";

const ToggleContext = createContext(null);

const useToggleContext = () => {
  const context = use(ToggleContext);

  if (!context) {
    throw new Error("Out of boundary, please wrap everything with <Toggle/> ");
  }

  return context;
};

function Toggle({ children }) {
  const [active, setActive] = useState(false);
  return (
    <ToggleContext value={{ active, setActive }}>{children}</ToggleContext>
  );
}

function ToggleActive({ children }) {
  const { active } = useToggleContext();
  return active ? children : null;
}

function ToggleInactive({ children }) {
  const { active } = useToggleContext();
  return !active ? children : null;
}

function ToggleTrigger() {
  const { active, setActive } = useToggleContext();
  return <input type="checkbox" onChange={() => setActive(!active)} />;
}

Toggle.Active = ToggleActive;
Toggle.Inactive = ToggleInactive;
Toggle.Trigger = ToggleTrigger;

export default Toggle;
