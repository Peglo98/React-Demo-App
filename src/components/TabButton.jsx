export default function TabButton({ children, onSelect, isSelected, ...click }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...click}>
        {children}
      </button>
    </li>
  );
}
