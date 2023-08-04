import { readFromJSONFile, writeToJSONFile } from "./fileUtility.js";
import { fetch_course_data } from "./fetch.js";

let hash = {  "ACCOUNTG": 0,  "AEROSPAC": 1,  "AFROAM": 2,  "ANIMLSCI": 3,  "ANTHRO": 4,  "ARABIC": 5,  "ARCH": 6,  "ART": 7,  "ART-HIST": 8,  "ARTS-EXT": 9,  "ASIAN-ST": 10,  "ASTRON": 11,  "BDIC": 12,  "BIOCHEM": 13,  "BIOLOGY": 14,  "BMED-ENG": 15,  "BIOSTATS": 16,  "BCT": 17,  "CATALAN": 18,  "CHEM-ENG": 19,  "CHEM": 20,  "CHINESE": 21,  "CE-ENGIN": 22,  "CLASSICS": 23,  "CICS": 24,  "COMM": 25,  "COMM-DIS": 26,  "COMP-LIT": 27,  "COMPSCI": 28,  "DANCE": 29,  "DACSS": 30,  "ECON": 31,  "EDUC": 32,  "E&C-ENG": 33,  "ENGIN": 34,  "ENGLISH": 35,  "ESL": 36,  "ENGLWRIT": 37,  "ECO": 38,  "EHS": 39,  "ENVIRSCI": 40,  "EPI": 41,  "FFYS": 42,  "FILM-ST": 43,  "FINANCE": 44,  "FYS": 45,  "FORLANGC": 46,  "FOOD-SCI": 47,  "FRENCHST": 48,  "GEOGRAPH": 49,  "GEOLOGY": 50,  "GEO-SCI": 51,  "GERMAN": 52,  "GRADSCH": 53,  "GREEK": 54,  "HPP": 55,  "HEBREW": 56,  "HISPAN": 57,  "HISTORY": 58,  "HONORS": 59,  "HT-MGT": 60,  "HM&FNART": 61,  "ICONS": 62,  "INFO": 63,  "SCH-MGMT": 64,  "ITALIAN": 65,  "JAPANESE": 66,  "JOURNAL": 67,  "JUDAIC": 68,  "KIN": 69,  "KOREAN": 70,  "LABOR": 71,  "LANDARCH": 72,  "LANDCONT": 73,  "LLC": 74,  "LATIN": 75,  "LATIN-ED": 76,  "LEGAL": 77,  "LINGUIST": 78,  "MANAGMNT": 79,  "MARKETNG": 80,  "MS-ENG": 81,  "MATH": 82,  "M&I-ENG": 83,  "MICROBIO": 84,  "MIDEAST": 85,  "MILITARY": 86,  "MOLCLBIO": 87,  "MUSIC": 88,  "MUSIC-ED": 89,  "MUSICAPP": 90,  "NRC": 91,  "NATSCI": 92,  "NEUROS&B": 93,  "NURSING": 94,  "NUTRITN": 95,  "OIM": 96,  "ORG&EVBI": 97,  "PHIL": 98,  "PHYSICS": 99,  "PLANTBIO": 100,  "POLISH": 101,  "POLISCI": 102,  "POLYMER": 103,  "PORTUG": 104,  "PSYCH": 105,  "PUBHLTH": 106,  "REGIONPL": 107,  "RES-ECON": 108,  "RUSSIAN": 109,  "SPHHS": 110,  "SPP": 111,  "SCHPSYCH": 112,  "SRVCLRNG": 113,  "SOCBEHAV": 114,  "STPEC": 115,  "SOCIOL": 116,  "SPANISH": 117,  "SPANI-ED": 118,  "SPORTMGT": 119,  "STATISTC": 120,  "STOCKSCH": 121,  "SUSTCOMM": 122,  "THEATER": 123,  "UMASS": 124,  "UNIVRSTY": 125,  "WGSS": 126};

async function store_open_courses() {
  return readFromJSONFile("subjects.json").then((courses) =>
    Promise.all(courses.map((course) => fetch_course_data(course.id))).then(
      (values) => writeToJSONFile("data.json", values)
    )
  );
}

const get_hash = () => readFromJSONFile("subjects.json").then((courses) => courses.map((course, i) => (hash[course.id] = i)));

async function is_open(major, number) {
  let major_id = hash[major];
  return readFromJSONFile('data.json').then(majors => majors[major_id].some(course => course.number === number));
}

const get_course = (major, number) => ({major: major, number: number, id: []});

async function init_courses(...courses) {
  return readFromJSONFile('users.json').then(data => {
    // if there is no course data
    if (!data) { data = {}; }

    for (let course of courses) {
      data[course.major + ':' + course.number] = []
    }
    return writeToJSONFile('users.json', data);
  });
}

async function add_courses(id, ...courses) {
  return readFromJSONFile('users.json').then(data => {
    // if there is no course data
    if (!data) { return Promise.reject("No active course data available"); }

    for (let {major, number, _} of courses) {
      let course_id = major+':'+number;

      // if the course is not found
      if (!data[course_id]) { 
        writeToJSONFile('users.json', data);
        return Promise.reject("Course not found");
      }
  
      data[course_id].push(id);
    }

    return writeToJSONFile('users.json', data);
  });  
}

async function check_for_open_courses() {
  return readFromJSONFile('users.json').then(data => {
    for (let course of Object.keys(data)) {
      let [major, number] = course.split(':')

      is_open(major, number).then(is_open => is_open ? console.log(`${major} ${number} is open`) : 0);
    }
  });  
}

store_open_courses().then(_ => check_for_open_courses()).catch(err => console.log(err));