const table = document.getElementById("standings");
const url = "http://ergast.com/api/f1/current/driverStandings.json";

fetch(url).then(response => {
    response.json().then(data => {
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach((x, index) => {
            const row = table.insertRow();
            row.insertCell().textContent = `${index + 1}. ${x.Driver.givenName} ${x.Driver.familyName}`;
            row.insertCell().textContent = x.points;
        });
    });
});