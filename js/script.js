// Ghost Properties
const GHOSTS = [
    {
        name: "banshee",
        evidence: ["DOTs", "ultraviolet", "ghostOrbs"]
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
        evidence: ["ultraviolet", "freezingTemps", "spiritBox"]
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
window.onload = resetCheckboxes();

document.getElementById("reset").addEventListener("click", resetCheckboxes);

// Uncheck all boxes
function resetCheckboxes() {
    var checkboxes = document.getElementsByTagName("input");

    for (var x = 0; x < checkboxes.length; x++) {
        if (checkboxes[x].type == "checkbox") {
            checkboxes[x].checked = false;
        }
    }
    document.querySelectorAll(".ghost").forEach(div => div.style.display = "block");
    evidenceCollected = [];
}

// Limit the amount of selectable items to 3
document.querySelectorAll(".evidenceList").forEach(check => check.addEventListener('click', function (e) {
    if (document.querySelectorAll(".evidenceList:checked").length > 3) {
        e.preventDefault();
        return false;
    }
}))

// Handle evidence and compare to ghost objects
document.addEventListener('click', function (e) {

    if (e.target.matches('input[type=checkbox]')) {
        if (e.target.checked && evidenceCollected.length < 3) {
            evidenceCollected.push(e.target.name);
        }
        else if (e.target.checked === false) {
            evidenceCollected.pop(e.target.name);
        }

        let arr1 = evidenceCollected.sort();

        GHOSTS.forEach(function (ghost) {
            let arr2 = ghost.evidence.sort();

            if (arr1.every(val => arr2.includes(val))) {
                document.querySelector("#" + ghost.name).style.display = "block";
            }
            else {
                document.querySelector("#" + ghost.name).style.display = "none";
            }
        })
    }
})

var cheetoCounter = 0;
document.querySelector(".surprise").addEventListener("click", function() {
    if (cheetoCounter === 0 && document.querySelector(".surprise").childElementCount <= 1) {
        const chester = document.createElement("img");
        chester.src = "./images/Cheetomann.png";
        document.querySelector(".surprise").insertBefore(chester, document.querySelector("#sw-js-blob-svg"));
        cheetoCounter++;
    }
    else if (cheetoCounter === 0) {
        document.querySelector("img").style.display = "block";
        cheetoCounter++;
    }
    else if (cheetoCounter === 1) {
        document.querySelector("img").style.display = "none";
        cheetoCounter--;
    }
})