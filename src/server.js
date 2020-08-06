// Data collections
const proffys = [
    {
        name: "Kauan Schaeffer",
        avatar: "https://avatars0.githubusercontent.com/u/37464395?s=460&u=463274b9ecfdf58b59713229addaf5545c0c034c&v=4",
        whatsapp: "4199999999",
        bio: "Amante da busca constante pelo saber.<br><br>Apaixonado pela filosofia e suas reflexões, sempre buscando escrever e refletir acerca de questões epistemológicas, metafísicas, antropológicas e axiológicas.",
        subject: "Filosofia",
        cost: "1,00",
        weekday: [0],
        time_from: [720],
        time_to: [940]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Filosofia",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// Util
function getSubject(subjectNumber){
    return subjects[+subjectNumber - 1]; // This + is the way to ensure that its a number
}

// Pages functionalities
function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays});
}

function pageGiveClasses(req, res) {
    const proffyData = req.query;
    const isNotEmpty = Object.keys(proffyData).length > 0; // Verifying each key of the array
    if(isNotEmpty){
        proffyData.subject = getSubject(proffyData.subject);
        proffys.push(proffyData);
        return res.redirect("/study");
    }else {
        return res.render("give-classes.html", {subjects, weekdays});
    }
}

// Server config
const express = require('express');
const server = express();
const port = 3000;

// Nunjucks config (Template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views/pages', {
    express: server,
    noCache: true
});

server
    .use(express.static("public")) // Use static files from public source
    // App routing
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    // Server start
    .listen(port);