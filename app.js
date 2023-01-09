////сериал чернобыль от HBO

var chernobyl ={
    name: 'The Chernobyl HBO',
    releseDate: 'May 6, 2019',
    moveOvner: 'USA',
    placeOfEvents: 'Ukrainian USSR',
    mainActor: 'Jared Harris, Stellan Ritter, Jesse Buckley, Con O Neill',
    producer:  'Johan Renck',
    episodes:  ' 5',
    genr:'ecological catastrophy',
    mainCharactres:{
        professor: 'Aligasov',
        firefighter: 'Timchenko',
        military: 'Sherbina',
        miner: 'Zacepin',

    },
    guiltyCharacter:{
        nuclearScientist: 'Dyatlov',
        dispatcher: 'Akimov',
        directorAES: 'Ulianov',
    }
}
var series = 'Series: '
var date = 'Pubication date: '
var leadRoles = 'Actors in the lead roles: '
var epis = ' episodes'

console.log(chernobyl)
console.log(series+chernobyl.name)
console.log(date+chernobyl.releseDate)
console.log(leadRoles+chernobyl.mainActor)
console.log(chernobyl.name  + chernobyl.episodes + epis)

/////////////дни недели

var day = 'tuesday'
switch (day){
    case 'Monday':
    case 'monday':
        console.log('понедельник')
        break;
    case 'Tuesday':
    case 'tuesday':
        console.log('вторник')
        break;
    case 'Wednesday':
    case 'wednesday':
        console.log('среда')
        break;
    case 'Thursday':
    case 'thursday':
        console.log('четверг')
        break;
    case 'Friday':
    case 'friday':
        console.log('пятница')
        break;
    case 'Saturday':
    case 'saturday':
        console.log('суббота')
        break;
    case 'Sunday':
    case 'sunday':
        console.log('вскресенье')
        break;
    default:
        console.log('error')


}

