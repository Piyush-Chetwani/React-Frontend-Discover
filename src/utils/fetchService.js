export const fetchHackathons = () => {
    fetch('https://discover-api.zubi.io/api/hackathons/all')
    .then(res => res.json())
    .then(data => {
        return Promise.resolve(data);
    })
}