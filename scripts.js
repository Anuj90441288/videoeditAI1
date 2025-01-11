/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* Header Styling */
header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #333;
    color: white;
}

header .logo h1 {
    margin: 0;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
}

nav ul li a:hover {
    text-decoration: underline;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 100px 0;
    background-color: #1e1e1e;
    color: white;
}

.hero h2 {
    font-size: 36px;
}

.hero p {
    font-size: 18px;
    margin: 20px 0;
}

.hero button {
    padding: 15px 30px;
    font-size: 18px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

.hero button:hover {
    background-color: #0056b3;
}

/* Features Section */
.features {
    padding: 50px;
    text-align: center;
    background-color: #ffffff;
}

.features h2 {
    font-size: 32px;
}

.feature {
    margin: 20px;
    display: inline-block;
    width: 30%;
    background-color: #f4f4f4;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature h3 {
    font-size: 24px;
}

.feature p {
    font-size: 16px;
}

/* Upload Section */
.upload {
    text-align: center;
    padding: 50px 0;
    background-color: #f9f9f9;
}

.upload input {
    padding: 10px;
    margin: 20px 0;
}

/* Preview Section */
.preview {
    text-align: center;
    padding: 50px 0;
    background-color: #ffffff;
}

.preview video {
    width: 640px;
    height: 360px;
}

/* About Section */
.about {
    padding: 50px;
    text-align: center;
    background-color: #ffffff;
}

.about h2 {
    font-size: 32px;
}

.about p {
    font-size: 16px;
    max-width: 800px;
    margin: 20px auto;
}

/* Contact Section */
.contact {
    padding: 50px;
    text-align: center;
    background-color: #f9f9f9;
}

.contact h2 {
    font-size: 32px;
}

.contact a {
    color: #007bff;
}

/* Footer Section */
footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: white;
}
