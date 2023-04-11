import express from "express";
const {getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent} = require("./controller")
const Router = express.Router;
const router = Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent)

module.exports = router;