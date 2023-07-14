export const updateObjectInArray = (array, itemId, objPropName, newObjProps) => array.map(u => {
    if (u[itemId] === objPropName) {
        return {...u, ...newObjProps}
    }
    return u
})