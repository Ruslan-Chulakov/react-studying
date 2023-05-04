function Filter({value, handleFilterInput}) {
    return (
        <input type="text" value={value} onChange={handleFilterInput} />
    )
};

export default Filter;