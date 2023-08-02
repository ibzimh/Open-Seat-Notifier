import { readFromJSONFile, writeToJSONFile } from "./fileUtility.js";
import { fetch_course_data } from "./fetch.js";

readFromJSONFile("subjects.json").then(courses =>
  Promise.all(courses.map(course => fetch_course_data(course.id))).then(
    values => writeToJSONFile("data.json", values)
  )
);
