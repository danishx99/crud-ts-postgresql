"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield prisma.student.findMany();
        res.status(200).json(students);
    }
    catch (error) {
        console.log(error);
        res.status(400).send("An error ocurred.");
    }
});
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const student = yield prisma.student.findUnique({
            where: {
                id: id,
            },
        });
        if (student == null)
            res.status(404).send("Student id does not exist.");
        else
            res.status(400).json(student);
    }
    catch (error) {
        console.log(error);
        res.status(400).send("An error ocurred.");
    }
});
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, age, dob } = req.body;
    try {
        const createStudent = yield prisma.student.create({
            data: {
                name,
                email,
                age,
                dob: new Date(dob),
            },
        });
        res.status(200).send("User successfully created.");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("An error ocurred.");
    }
});
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const deleteStudent = yield prisma.student
            .delete({
            where: {
                id: id,
            },
        });
        res.status(200).send("User sucessfully deleted");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("An error ocurred.");
    }
});
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { email } = req.body;
    try {
        const updateStudent = yield prisma.student
            .update({
            where: {
                id,
            },
            data: {
                email,
                updatedAt: (new Date()).toLocaleString("en-US")
            },
        });
        res.status(200).send("User sucessfully updated.");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("An error ocurred.");
    }
});
module.exports = { getAllStudents, getStudentById, addStudent, deleteStudent, updateStudent };
