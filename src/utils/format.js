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

function getSubject(subjectNumber) {
    return subjects[+subjectNumber - 1]; // This + is the way to ensure that its a number
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(':'); // Using disruption instead of "const hour = time.split(:)[0]"
    return Number((hour * 60) + minutes);
}

module.exports = { subjects, weekdays, getSubject, convertHoursToMinutes };