const monocross = (first, second) => {
    let p1 = first[0] + second[0]
    let p2 = first[1] + second[0]
    let p3 = first[0] + second[1]
    let p4 = first[1] + second[1]
    if (p1[0] === p1[0].toLowerCase() && p1[1] === p1[1].toUpperCase()) {
        p1 = second[0] + first[0]
    }
    if (p2[0] === p2[0].toLowerCase() && p2[1] === p2[1].toUpperCase()) {
        p2 = second[0] + first[1]
    }
    if (p3[0] === p3[0].toLowerCase() && p3[1] === p3[1].toUpperCase()) {
        p3 = second[1] + first[0]
    }
    if (p4[0] === p4[0].toLowerCase() && p4[1] === p4[1].toUpperCase()) {
        p4 = second[1] + first[1]
    }
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)
    document.getElementById("jsText").innerHTML = `Cross: ${first} x ${second}: </p><p>`;
    let p
    if (p1 === p2 && p1 === p3 && p1 === p4) {
        document.getElementById("jsText").innerHTML += `4${p1}`;
    } else if ((p1 === p2 && p1 === p3) || (p1 === p2 && p1 === p4) || (p1 === p3 && p1 === p4)) {
        if (p1 === p2 && p1 === p3) {
            p = p4
        } else if (p1 === p2 && p1 === p4) {
            p = p3
        } else if (p1 === p3 && p1 === p4) {
            p = p2
        }
        document.getElementById("jsText").innerHTML += `3${p1}:1${p}`;
    } else if (p2 === p3) {
        document.getElementById("jsText").innerHTML += `1${p1}:2${p2}:1${p4}`;
    } else if (p2[1] === p3[0] && p2[0] === p3[1]) {
        document.getElementById("jsText").innerHTML += `1${p1}:2${p3}:1${p4}`;
    } else if (p1 === p3 && p2 === p4) {
        
        document.getElementById("jsText").innerHTML += `2${p1}:2${p4} => 1${p1}:1${p4}`;
    } else if (p1 === p2 && p3 === p4) {
        document.getElementById("jsText").innerHTML += `2${p1}:2${p3} => 1${p1}:1${p3}`;
    } 
}

const reset = () => {
    document.getElementById("jsText").innerHTML = "";
}