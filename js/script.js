// Ghost Properties
const GHOSTS = [
    {
        name: "banshee",
        evidence_1: "DOTs",
        evidence_2: "EMF5",
        evidence_3: "ghostOrbs"
    },
    {
        name: "demon",
        evidence_1: "fingerprints",
        evidence_2: "freezingTemps",
        evidence_3: "writing"
    },
    {
        name: "deogen",
        evidence_1: "DOTs",
        evidence_2: "writing",
        evidence_3: "spiritBox"
    },
    {
        name: "goryo",
        evidence_1: "DOTs",
        evidence_2: "EMF5",
        evidence_3: "fingerprints"
    },
    {
        name: "hantu",
        evidence_1: "fingerprints",
        evidence_2: "freezingTemps",
        evidence_3: "ghostOrbs"
    },
    {
        name: "jinn",
        evidence_1: "EMF5",
        evidence_2: "fingerprints",
        evidence_3: "freezingTemps"
    },
    {
        name: "mare",
        evidence_1: "ghostOrbs",
        evidence_2: "writing",
        evidence_3: "spiritBox"
    },
    {
        name: "moroi",
        evidence_1: "freezingTemps",
        evidence_2: "Ghost writing",
        evidence_3: "spiritBox"
    },
    {
        name: "myling",
        evidence_1: "EMF5",
        evidence_2: "fingerprints",
        evidence_3: "writing"
    },
    {
        name: "obake",
        evidence_1: "EMF5",
        evidence_2: "fingerprints",
        evidence_3: "ghostOrbs"
    },
    {
        name: "oni",
        evidence_1: "DOTs",
        evidence_2: "EMF5",
        evidence_3: "freezingTemps"
    },
    {
        name: "onryo",
        evidence_1: "freezingTemps",
        evidence_2: "ghostOrbs",
        evidence_3: "spiritBox"
    },
    {
        name: "phantom",
        evidence_1: "DOTs",
        evidence_2: "fingerprints",
        evidence_3: "spiritBox"
    },
    {
        name: "poltergeist",
        evidence_1: "fingerprints",
        evidence_2: "writing",
        evidence_3: "spiritBox"
    },
    {
        name: "raiju",
        evidence_1: "DOTs",
        evidence_2: "EMF5",
        evidence_3: "ghostOrbs"
    },
    {
        name: "revenant",
        evidence_1: "freezingTemps",
        evidence_2: "ghostOrbs",
        evidence_3: "writing"
    },
    {
        name: "shade",
        evidence_1: "EMF5",
        evidence_2: "freezingTemps",
        evidence_3: "writing"
    },
    {
        name: "spirit",
        evidence_1: "EMF5",
        evidence_2: "writing",
        evidence_3: "spiritBox"
    },
    {
        name: "thaye",
        evidence_1: "DOTs",
        evidence_2: "ghostOrbs",
        evidence_3: "writing"
    },
    {
        name: "mimic",
        evidence_1: "fingerprints",
        evidence_2: "freezingTemps",
        evidence_3: "ghostOrbs"
    },
    {
        name: "twins",
        evidence_1: "EMF5",
        evidence_2: "freezingTemps",
        evidence_3: "spiritBox"
    },
    {
        name: "wraith",
        evidence_1: "DOTs",
        evidence_2: "EMF5",
        evidence_3: "spiritBox"
    },
    {
        name: "yokai",
        evidence_1: "DOTs",
        evidence_2: "ghostOrbs",
        evidence_3: "spiritBox"
    },
    {
        name: "yurei",
        evidence_1: "DOTs",
        evidence_2: "freezingTemps",
        evidence_3: "ghostOrbs"
    }
]

var numOfEvidence = 0;

// Uncheck all boxes on page load
window.onload = function(){
    var checkboxes = document.getElementsByTagName("input");
 
    for (var x = 0; x < checkboxes.length; x++){
       if (checkboxes[x].type == "checkbox"){
           checkboxes[x].checked = false;
       }
    }
 }

// Limit the amount of selectable items to 3
document.querySelectorAll(".evidenceList").forEach(check => check.addEventListener('click', function (e) {
    if (document.querySelectorAll(".evidenceList:checked").length > 3) {
        e.preventDefault();
        return false;
    }
}))

 // Add event listeners to all checkboxes only
 // Compare each checkbox value against each ghost object evidence value
 // If there is not a match and the checkbox is checked, hide the div representing the object
 // If there is not a match and the checkbox is not checked, display the div again
document.addEventListener('click', function (e) {
    if (e.target.matches('input[type=checkbox]') && e.target.checked && numOfEvidence < 3) {
        numOfEvidence++;
        GHOSTS.forEach(function (ghost) {
            if (ghost.evidence_1 !== e.target.name &&
                ghost.evidence_2 !== e.target.name &&
                ghost.evidence_3 !== e.target.name){
                document.querySelector("#" + ghost.name).style.display = "none";
            }
        }
    )}
    else if (e.target.matches('input[type=checkbox]') && e.target.checked === false) {
        numOfEvidence--;
        GHOSTS.forEach(function (ghost) {
            if (ghost.evidence_1 !== e.target.name &&
                ghost.evidence_2 !== e.target.name &&
                ghost.evidence_3 !== e.target.name) {
                document.querySelector("#" + ghost.name).style.display = "block";
            }
        }
    )}
})