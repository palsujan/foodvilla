export const filterData = (searchInput, restaurants) =>{
    return restaurants.filter((restaurant) =>
            restaurant?.data?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    )
    
}