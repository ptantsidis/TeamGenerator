async function generateHTML(response) {

   // add for loop to insert seperate cards





    return ` 
<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <header>
            <h1 class="display-3">My Team</h1>
    </header>
    <main>
        <div class="row">
            <div class="col-md-3" id="1">
                <div class="card">
                    <h2>${response.fname}</h2>
                    <div class ="role">${response.role}</div>
                    <div class = "email">{${response.email}}</div>
                </div>
            </div>
            <div class="col-md-3" id="2">
                <div class="card">
                    <h2>${response.fname}</h2>
                    <div class ="role">${response.role}</div>
                    <div class = "email">{${response.email}}</div>
                </div>
            </div>
            <div class="col-md-3" id="3">
                <div class="card">
                    <h2>${response.fname}</h2>
                    <div class ="role">${response.role}</div>
                    <div class = "email">{${response.email}}</div>
                </div>
            </div>
            <div class="col-md-3" id="4">
                <div class="card">
                    <h2>${response.fname}</h2>
                    <div class ="role">${response.role}</div>
                    <div class = "email">{${response.email}}</div>
                </div>
            <div class="col-md-3" id="5">
                <div class="card">
                    <h2>${response.fname}</h2>
                    <div class ="role">${response.role}</div>
                    <div class = "email">{${response.email}}</div>
                </div>
            </div>
        </div
    </main>
</body>
</html>`
}
module.exports = generateHTML