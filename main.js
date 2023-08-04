import { readFromJSONFile, writeToJSONFile } from "./fileUtility.js";
import { fetch_course_data } from "./fetch.js";

async function store_open_courses() {
  return readFromJSONFile("subjects.json").then(courses =>
    Promise.all(courses.map(course => fetch_course_data(course.id))).then(
      values => writeToJSONFile("data.json", values)
    )
  );
}

store_open_courses();
