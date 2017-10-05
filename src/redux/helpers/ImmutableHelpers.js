export function updateItemInArray(array, itemId, updateItemCallback) {
    const updatedItems = array.map(item => {
    	if(item.id !== itemId) {
            return item;
        }
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });
	return updatedItems;
}


export function updateMultipleItemsInArray(array, conditionCB, updateItemCB) {

    return array.map(item => {
        if (conditionCB(item)) {
            return updateItemCB(item)
        } else {
            return item
        }
    });
}

export function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

export function findEntity(entities, id) {
	return entities.filter(e => (e.id === id))[0]
}

