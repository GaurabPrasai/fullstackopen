const FilterPerson = ({value, func}) => {
    return(
        <>
            <div>
                filter shown with<input value={value} onChange={func}/>
            </div>
        </>
    )
}
export default FilterPerson