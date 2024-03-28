
export const dateFormatter = (date: Date) => {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export const today = () => new Date();

export const lastMonth = () => {
    var date = new Date();
    date.setDate(date.getDate() - 30)
    return date;
}