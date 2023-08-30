function convertToUpperCase(inputString) {
    const upperCaseString = inputString.toUpperCase();
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = upperCaseString;
}
convertToUpperCase("hello js!");