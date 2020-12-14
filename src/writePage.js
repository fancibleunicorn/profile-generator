const writePage = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>
    <header class="text-center bg-primary text-light py-5 m-2">
        <h1>My Team</h1>
    </header>
    <section class="container">
        <div class="row">
            <div id="manager" class="card" style="width: 30em;">
                <div class="card-body">
                <h5 class="card-title bg-danger text-light text-center py-2">Mr.Bross</h5>
                <h6 class="card-subtitle mb-2 bg-secondary text-light text-center py-1">Manager</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 123</li>
                    <li class="list-group-item">Email: <a href="mailto:adamcrandall91@gmail.com">adamcrandall91@gmail.com</a></li>
                    <li class="list-group-item">Office: 345</li>
                </ul>
                </div>
            </div>
            <div id="engineer" class="card" style="width: 30rem;">
                <div class="card-body">
                <h5 class="card-title bg-success text-light text-center py-2">Ms Engineer</h5>
                <h6 class="card-subtitle mb-2 bg-secondary text-light text-center py-1">Engineer</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 123</li>
                    <li class="list-group-item">Email: <a href="mailto:adamcrandall91@gmail.com">adamcrandall91@gmail.com</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/fancibleunicorn">fancibleunicorn</a></li>
                </ul>
                </div>
            </div>
            <div id="intern" class="card" style="width: 30rem;">
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
}

module.exports = writePage;