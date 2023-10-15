// Ghost Properties
const GHOSTS = [
    {
        name: "banshee",
        evidence: ["DOTs", "EMF5", "ghostOrbs"]
    },
    {
        name: "demon",
        evidence: ["ultraviolet", "freezingTemps", "writing"]
    },
    {
        name: "deogen",
        evidence: ["DOTs", "writing", "spiritBox"]
    },
    {
        name: "goryo",
        evidence: ["DOTs", "EMF5", "ultraviolet"]
    },
    {
        name: "hantu",
        evidence: ["ultraviolet", "freezingTemps", "ghostOrbs"]
    },
    {
        name: "jinn",
        evidence: ["EMF5", "ultraviolet", "freezingTemps"]
    },
    {
        name: "mare",
        evidence: ["ghostOrbs", "writing", "spiritBox"]
    },
    {
        name: "moroi",
        evidence: ["freezingTemps", "Ghost writing", "spiritBox"]
    },
    {
        name: "myling",
        evidence: ["EMF5", "ultraviolet", "writing"]
    },
    {
        name: "obake",
        evidence: ["EMF5", "ultraviolet", "ghostOrbs"]
    },
    {
        name: "oni",
        evidence: ["DOTs", "EMF5", "freezingTemps"]
    },
    {
        name: "onryo",
        evidence: ["freezingTemps", "ghostOrbs", "spiritBox"]
    },
    {
        name: "phantom",
        evidence: ["DOTs", "ultraviolet", "spiritBox"]
    },
    {
        name: "poltergeist",
        evidence: ["ultraviolet", "writing", "spiritBox"]
    },
    {
        name: "raiju",
        evidence: ["DOTs", "EMF5", "ghostOrbs"]
    },
    {
        name: "revenant",
        evidence: ["freezingTemps", "ghostOrbs", "writing"]
    },
    {
        name: "shade",
        evidence: ["EMF5", "freezingTemps", "writing"]
    },
    {
        name: "spirit",
        evidence: ["EMF5", "writing", "spiritBox"]
    },
    {
        name: "thaye",
        evidence: ["DOTs", "ghostOrbs", "writing"]
    },
    {
        name: "mimic",
        evidence: ["ultraviolet", "freezingTemps", "ghostOrbs"]
    },
    {
        name: "twins",
        evidence: ["EMF5", "freezingTemps", "spiritBox"]
    },
    {
        name: "wraith",
        evidence: ["DOTs", "EMF5", "spiritBox"]
    },
    {
        name: "yokai",
        evidence: ["DOTs", "ghostOrbs", "spiritBox"]
    },
    {
        name: "yurei",
        evidence: ["DOTs", "freezingTemps", "ghostOrbs"]
    }
]

var evidenceCollected = [];

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

    if (e.target.matches('input[type=checkbox]') && e.target.checked && evidenceCollected.length < 3) {

        evidenceCollected.push(e.target.name);

        GHOSTS.forEach(function (ghost) {
            if (ghost.evidence[0] !== e.target.name &&
                ghost.evidence[1] !== e.target.name &&
                ghost.evidence[2] !== e.target.name){
                document.querySelector("#" + ghost.name).style.display = "none";
            }
        }
    )}
    else if (e.target.matches('input[type=checkbox]') && e.target.checked === false) {
        
        evidenceCollected.pop(e.target.name);

        GHOSTS.forEach(function (ghost) {
            if (ghost.evidence[0] !== e.target.name ||
                ghost.evidence[1] !== e.target.name ||
                ghost.evidence[2] !== e.target.name) {
                document.querySelector("#" + ghost.name).style.display = "block";
            }
        }
    )}
})