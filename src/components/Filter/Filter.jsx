import React from "react"

function Filter({handleFilter}) {
    return <input
        name="filter"
        onChange={handleFilter}

    
    />
}

export default Filter;