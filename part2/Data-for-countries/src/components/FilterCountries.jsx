const FilterCountries = ({ value, func }) => {
  return (
    <>
      <div>
        find countries
        <input value={value} onChange={func} />
      </div>
    </>
  );
};
export default FilterCountries;
