function getSessions() {
    let sessions = localStorage.getItem('sessions');
    if (sessions === null) {
        return [];
    } else {
        return JSON.parse(sessions);
    }
}

function documentSession() {
    const sessionList = document.getElementById('sessionList');
    const sessions = getSessions();
    sessionList.innerHTML = '';
    if (sessions.length === 0) {
        sessionList.textContent = 'No sessions found';
        return;
    }
    const ul = document.createElement('ul');
    sessions.forEach(session => {
        const li = document.createElement('li');
        li.textContent = `${session}`;
        ul.appendChild(li);
    });
    sessionList.appendChild(ul);
}

documentSession();