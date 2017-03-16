var firstname = 'Simon';

var addSurname = () => {
    var surname = 'Holmes';
    var fullname = firstname + surname;
    console.log(fullname);
}
addSurname();

var addSurname2 = () => {
    var surname = 'Holmes';
    var firstname = 'David';
    var fullname = firstname + surname;
    console.log(fullname);
}
addSurname2();

var addSurname3 = () => {
    var surname = 'Holmes';
    var fullname = firstname + surname;
    var firstname = 'David';
    console.log(fullname);
}
addSurname3();