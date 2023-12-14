const poll = new Map()

poll.set("Lionel Messi", 0)
poll.set("Cristiano Ronaldo", 0)
poll.set("Maradona", 0)
poll.set("Ronaldinho", 0)
poll.set("Others", 0)

const btn = document.querySelector(".btn")

function submitForm(e) {
    e.preventDefault()

    const selectedOption = document.querySelector('input[name="poll-option"]:checked');

    if (!selectedOption) {
        alert("Please select an option");
        return;   
    } else{
        setTimeout(() => {
            alert("Your option has been recorded")
        }, 1000);
    }
    let voteCounts = poll.get(selectedOption.value);
    poll.set(selectedOption.value, voteCounts + 1);

    displayResults()

    // To disable form field after submit

    // const form = document.querySelector("#poll-form")
    document.querySelectorAll("input, button").forEach(( e)=> {
        e.setAttribute("disabled", true)
    })
}

function displayResults() {
    const results = document.querySelector(".results")
    results.innerHTML = "";

    poll.forEach((votes, option) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add(
           "form-check2",
           "card-body2",
           "results"
            )
        optionElement.innerHTML = `<strong>${option} : </strong>${votes} vote(s)`
        results.appendChild(optionElement)
    });

    // OR

        // for (const [option, votes] of poll) {
    //     const optionElement = document.createElement("div");
    //     optionElement.classList.add(
    //         "form-check2",
    //         "card-body2",
    //         "results"
    //         )
    //     optionElement.innerHTML = `${option} : ${votes} vote(s)`
    //         results.appendChild(optionElement)

    // }

   

}

btn.addEventListener("click", submitForm)































