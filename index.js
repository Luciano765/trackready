let featuredTrackdayMsg = document.getElementById("featuredStatus")
let featuredTrackdayCount = 6


function reserveSpot() {
     if (featuredTrackdayCount <= 0) {
        return
    }
    
    featuredTrackdayCount -= 1

    if (featuredTrackdayCount === 0) {
        featuredTrackdayMsg.textContent = "Sorry, no spots left!"
        document.getElementById("reserve-btn").disabled = true

    } else if (featuredTrackdayCount <= 2) {
        featuredTrackdayMsg.textContent =
            "Almost sold out! " + featuredTrackdayCount + " spot(s) left!"

    } else {
        featuredTrackdayMsg.textContent =
            "Spots left: " + featuredTrackdayCount
    }
}