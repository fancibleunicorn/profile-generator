const writeIntern = (intern) => {

        return `<div id="intern" class="card col" style="width: 30rem;">
                    <div class="card-body">
                        <h5 class="card-title bg-warning text-light text-center py-2">${intern[0].name}</h5>
                        <h6 class="card-subtitle mb-2 bg-secondary text-light text-center py-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.5 2.687v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                      </svg> ${intern[0].role}</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern[0].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern[0].email}">${intern[0].email}</a></li>
                            <li class="list-group-item">School: ${intern[0].school}</li>
                        </ul>
                    </div>
                </div>`;


}

module.exports = writeIntern;