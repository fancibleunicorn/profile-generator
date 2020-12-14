const writePage = (manager) => {
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
                <h5 class="card-title bg-danger text-light text-center py-2">${manager[0].name}</h5>
                <h6 class="card-subtitle mb-2 bg-secondary text-light text-center py-1">${manager[0].role}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 123</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a></li>
                    <li class="list-group-item">Office: ${manager[0].office}</li>
                </ul>
                </div>
            </div>
                `;
            
}

module.exports = writePage;