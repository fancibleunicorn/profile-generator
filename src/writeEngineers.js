const writeEngineers = (engineers) => {

    let list = ``

    for (let i = 0; i < engineers.length ; i++) {

        list += `<div id="engineers" class="card" style="width: 30rem;">
            <div class="card-body">
            <h5 class="card-title bg-success text-light text-center py-2">${engineers[i].name}</h5>
            <h6 class="card-subtitle mb-2 bg-secondary text-light text-center py-1">${engineers[i].role}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 123</li>
                <li class="list-group-item">Email: <a href="mailto:${engineers[i].email}">${engineers[i].email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineers[i].github}">${engineers[i].github}</a></li>
            </ul>
            </div>
        </div>
        `;
        }


    return list;
}

//intern code
`<div id="intern" class="card" style="width: 30rem;">
<div class="card-body">
<h5 class="card-title bg-warning text-light text-center py-2">Student Child</h5>
<h6 class="card-subtitle mb-2 bg-secondary text-light text-center py-1">Intern</h6>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 123</li>
    <li class="list-group-item">Email: <a href="mailto:adamcrandall91@gmail.com">adamcrandall91@gmail.com</a></li>
    <li class="list-group-item">School: University of Tennessee </li>
</ul>
</div>
</div>
</div>
</section>

</body>
</html>

`;

module.exports = writeEngineers