const teams = [];

document.getElementById('team-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const teamName = document.getElementById('team-name').value;
    const teamScore = parseInt(document.getElementById('team-score').value);
    const teamPenalty = parseInt(document.getElementById('team-penalty').value);
    
    const team = { name: teamName, score: teamScore, penalty: teamPenalty };
    teams.push(team);
    
    addTeamToList(team);
    document.getElementById('team-form').reset();
});

function addTeamToList(team) {
    const teamList = document.getElementById('team-list');
    const li = document.createElement('li');
    li.textContent = `${team.name} - Punteggio: ${team.score} - Penalità: ${team.penalty}`;
    teamList.appendChild(li);
}

document.getElementById('declare-winner').addEventListener('click', function() {
    const winner = teams.reduce((prev, current) => {
        const prevTotal = prev.score - prev.penalty;
        const currentTotal = current.score - current.penalty;
        return (currentTotal > prevTotal) ? current : prev;
    });
    
    alert(`Il vincitore è: ${winner.name} con un punteggio finale di ${winner.score - winner.penalty}`);
});
