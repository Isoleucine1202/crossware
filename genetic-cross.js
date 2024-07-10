const monocross = (first, second) => {
    let p1 = first[0] + second[0]
    let p2 = first[1] + second[0]
    let p3 = first[0] + second[1]
    let p4 = first[1] + second[1]
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)
    let pos1
    let pos2
    let pos3
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
    }
}

const reset = () => {
    document.getElementById("jsText").innerHTML = "";
}