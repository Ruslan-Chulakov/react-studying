function loadDataToLocalStorage(key, value) {
    try {
        const stringifyValue = JSON.stringify(value);
        localStorage.setItem(key, stringifyValue);
    } catch (error) {
        console.error(error.message);
    }
}

function getDataFromLocalStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        console.error(error.message)
    }
}

export {loadDataToLocalStorage, getDataFromLocalStorage};