var Semester;
(function (Semester) {
    Semester["SS"] = "SS";
    Semester["WS"] = "WS";
})(Semester || (Semester = {}));
// A function which takes a assoc array and a Creteria(a labmda which returns true or false based on the input)
function NotenFilter(array, kriterium) {
    let result = {};
    for (let key in array) {
        if (kriterium(key, array[key])) {
            result[key] = array[key];
        }
    }
    return result;
}
function getImmJahr(matNr) {
    return parseInt(matNr.slice(0, 2)) + 2000;
}
function getImmaSemester(matNr) {
    let code = parseInt(matNr.slice(2, 3));
    if (code == 1) {
        return Semester.SS;
    }
    else {
        return Semester.WS;
    }
}
function getImmaSemesterString(matNr) {
    if (getImmaSemester(matNr) != undefined) {
        return getImmaSemester(matNr).toString();
    }
    return "";
}
function notenAusgeben(noten, arrayFilter) {
    let array = arrayFilter == undefined ? noten : NotenFilter(noten, arrayFilter);
    for (let key in array) {
        console.log(`Matrikelnr ${key} hat das Studium im ${getImmaSemesterString(key)} ${getImmJahr(key)} begonnen und ${array[key] != undefined
            ? "in ANO die Note " + array[key]?.toString() + " erreicht"
            : "an der ANO-Prüfung nicht teilgenommen"} `);
    }
}
let ANO = {
    "1931308": 1.7,
    "1922418": 1.3,
    "2031321": 2.0,
    "1831987": 4.0,
    "1819187": 3.0,
    "1822981": 1.0,
    "1916711": 2.7,
    "1731987": 5.0,
    "1828721": 5.0,
    "1722291": undefined,
};
// No filter
notenAusgeben(ANO);
// All who Passed
console.log("------ ANO-Prüfung bestanden haben");
notenAusgeben(ANO, (matNr, note) => {
    if (note != undefined) {
        return note < 5.0;
    }
    else
        return false;
});
// All who Failed
console.log("------ ANO-Prüfung durchgefallen sind");
notenAusgeben(ANO, (matNr, note) => {
    if (note != undefined) {
        return note == 5.0;
    }
    else
        return false;
});
// All who didnt participate
console.log("------ ANO-Prüfung nicht teilgenommen haben");
notenAusgeben(ANO, (matNr, note) => {
    if (note == undefined) {
        return true;
    }
    else
        return false;
});
// All who started before 2019 and Passed
console.log("------ vor dem Jahr 2019 mit dem Studium begonnen und die ANO-Prüfung bestan-den haben");
notenAusgeben(ANO, (matNr, note) => {
    if (note != undefined && getImmJahr(matNr) < 2019) {
        return note < 5.0;
    }
    else
        return false;
});
export {};
//# sourceMappingURL=node_ano_grade.js.map