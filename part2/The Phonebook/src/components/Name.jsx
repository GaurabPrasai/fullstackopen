const Name = ({ name, number }) => {
  return (
    <>
      {name} {number} <button onClick={() => alert(`Delete ${name} ?`)}>Delete</button>
    </>
  );
};
export default Name;
