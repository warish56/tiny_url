

const addToDate = (date, seconds) => {
    const dt = new Date(date);
    dt.setSeconds(dt.getSeconds() + seconds);
    return dt;
}

module.exports = {
    addToDate
}