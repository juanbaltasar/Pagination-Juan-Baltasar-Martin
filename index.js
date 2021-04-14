const paginate = function (items, page, itemsPerPage) {
    /* YOUR CODE HERE */
    let objToReturn = {
        totalItems: 0,
        itemsOnPage: [],
        page: 0,
        itemsPerPage: 0,
        from: 0,
        to: 0,
        prev: false,
        next: false
    }

    objToReturn.totalItems = items.length

    objToReturn.itemsOnPage = items.slice(1 + (itemsPerPage * (page - 1)) - 1, 1 + (itemsPerPage * (page - 1)) - 1 + itemsPerPage)

    objToReturn.page = page

    objToReturn.itemsPerPage = itemsPerPage

    objToReturn.from = items.indexOf(objToReturn.itemsOnPage[0]) + 1
    
    objToReturn.to = items.indexOf(objToReturn.itemsOnPage[objToReturn.itemsOnPage.length - 1]) + 1

    objToReturn.prev = objToReturn.from > 1

    objToReturn.next = objToReturn.to < items.length

    return objToReturn
}

module.exports = paginate
