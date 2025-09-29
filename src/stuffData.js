// get all stuffData from the local storage
function getStoredStuffData() {
        const isStorageEmpty = localStorage.getItem("storedStuffData") === null
        if (!isStorageEmpty) {
                return JSON.parse(localStorage.getItem("storedStuffData"))
        }
        return []
}

export default Array.isArray(getStoredStuffData()) ? [...getStoredStuffData()] : [getStoredStuffData()]