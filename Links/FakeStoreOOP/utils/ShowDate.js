function ShowThisYear(text) {
    const date = new Date();
    const Year = date.getFullYear();
    text.innerHTML = `${Year} &#169;`;
}

export default ShowThisYear;
