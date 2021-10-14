async function generateHTML(response) {
    return ` 
<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header>    
            <h1 class="display-3">My Team</h1>
    </header>
    <main class="container">
        <div class="row">
            ${response}
        </div>
    </main>
</body>
</html>`
}
module.exports = generateHTML