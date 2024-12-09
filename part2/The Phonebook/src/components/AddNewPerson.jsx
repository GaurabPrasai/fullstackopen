const AddNewPerson = ({ text, data, func }) => {
  return (
    <>
      <div>
        {text}: <input name={text} value={data} onChange={func} />
      </div>
    </>
  );
};
export default AddNewPerson;
