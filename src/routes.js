"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent } = require("./controller");
const Router = express_1.default.Router;
const router = Router();
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
module.exports = router;
