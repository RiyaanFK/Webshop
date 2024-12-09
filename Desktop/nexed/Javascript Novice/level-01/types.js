let data = ["Hello", 3, 3.2, "3", true, false, 3.0 + 3, 3 + "3"];

function checkNumberType(value) {
    if (Number.isInteger(value)) {
        return "int";
    } else {
        return "float";
    }
}

data.forEach(value => {
    let type = typeof value; 
    if (type === "number") {
        let numberType = checkNumberType(value); 
        console.log(`Waarde ${value} heeft als type number ${numberType}.`);
    } else {
        console.log(`Waarde ${value} heeft als type ${type}.`);
    }
});
