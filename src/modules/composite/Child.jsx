export default function Child({ grandChild }) {
  return (
    <div>
      <h1>This is child component</h1>
      {grandChild}
    </div>
  );
}
