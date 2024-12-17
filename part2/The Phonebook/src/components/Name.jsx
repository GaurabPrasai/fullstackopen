const Name = ({ name, number, func }) => {
  return (
    <>
      {name} {number} {" "}<button onClick={func}>Delete</button>
    </>
  );
};
export default Name;
