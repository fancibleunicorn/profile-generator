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
            <div id="manager" class="card col" style="width: 30em;">
                <div class="card-body">
                <h5 class="card-title bg-danger text-light text-center py-2">${manager[0].name}</h5>
                <h6 class="card-subtitle mb-2 bg-secondary text-light text-center py-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              </svg> ${manager[0].role}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager[0].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a></li>
                    <li class="list-group-item">Office: ${manager[0].office}</li>
                </ul>
                </div>
            </div>
                `;
            
}

module.exports = writePage;