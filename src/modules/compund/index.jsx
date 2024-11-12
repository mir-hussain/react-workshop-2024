import Toggle from "./test";

export default function CompoundDemo() {
  return (
    <div>
      <h1>Compound Demo</h1>
      <Toggle>
        <Toggle.Active>Akhon active ache</Toggle.Active>
        <Toggle.Inactive>Akhon active nai</Toggle.Inactive>
        <Toggle.Trigger />
      </Toggle>
    </div>
  );
}

//* Relation between 2 or more components
//* Syncing state
