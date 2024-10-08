
// const MarksMass = 78;
// const MarksHeight = 1.69;
// const johnsMass = 92;
// const johnsHeight = 1.95;


const MarksMass = 95;
const MarksHeight = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

const MarksBmis = MarksMass / (MarksHeight * MarksHeight); 
const johnsBmis = johnsMass / (johnsHeight * johnsHeight);

console.log(MarksBmis, johnsBmis);

const markHigherBmi = MarksBmis > johnsBmis;
console.log(markHigherBmi);