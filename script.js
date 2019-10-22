const quadFunction = () => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    if (a > 0) {
        return "Up";
    } else
        return "Down";
};
const myParabola = ( ) => {
    document.getElementById("demo").innerHTML = quadFunction();
};

const yint = () => {
    var c = document.getElementById("myC").value;
    return (0,c);
};
const yInt = () => {
    document.getElementById("demo1").innerHTML = yint();
};

const axis = ( ) => { 
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var calc = -b/2*a;
    return calc; 
};
const Axis = () => {
    document.getElementById("demo2").innerhtml = axis();
};

const max = () => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    var minimum = -b/2*a;
    var ymin = a*minimum*minimum + b*minimum + c;
    return (minimum,ymin);
};
const Max = () => {
    document.getElementById("demo4").innerHTML = max();
};