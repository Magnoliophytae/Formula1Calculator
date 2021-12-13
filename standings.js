const table = document.getElementById("standings");
const title = document.getElementById("s-title");
const url = "https://ergast.com/api/f1/current/driverStandings.json";

fetch(url).then(response => {
    response.json().then(data => {
        title.textContent = `${data.MRData.StandingsTable.season} Drivers' Standings`;
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach((x, i) => {
            const row = table.insertRow();
            row.insertCell().textContent = `${i + 1}. ${x.Driver.givenName} ${x.Driver.familyName}`;
            row.insertCell().textContent = x.points;
        });
    });
});
