import {Request, Response} from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await prisma.student.findMany();
        res.status(200).json(students);
    } catch (error) {
       console.log(error);
        res.status(400).send("An error ocurred.")
       
    }
};

const getStudentById = async (req: Request, res: Response) => {

    const id= parseInt(req.params.id);
    try {
        const student = await prisma.student.findUnique({
        
      where: {
        id: id,
      },
    })
    
    if (student == null) res.status(404).send("Student id does not exist.") ;
    else res.status(400).json(student);

    } catch (error) {
        console.log(error);
        res.status(400).send("An error ocurred.")
        
    }
};

const addStudent =  async  (req: Request, res: Response) => {
     const { name, email, age, dob } = req.body;
    
     try {
        
    const createStudent = await prisma.student.create({
      data: {
        name,
        email,
        age,
        dob: new Date(dob),
      },
    });
    res.status(200).send("User successfully created.")

     } catch (error) {
        console.log(error);
        res.status(400).send("An error ocurred.")
   
     }
};

const deleteStudent = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
      const deleteStudent = await prisma.student
    .delete({
      where: {
        id: id,
      },
    });

    res.status(200).send("User sucessfully deleted");
    
  } catch (error) {
        console.log(error);
        res.status(400).send("An error ocurred.")

  }
};

const updateStudent = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { email } = req.body;

  try {

    const updateStudent = await prisma.student
    .update({
      where: {
        id,
      },
      data: {
        email,
        updatedAt: (new Date()).toLocaleString("en-US")
      },
    });

    res.status(200).send("User sucessfully updated.")
    
  } catch (error) {
    console.log(error);
     res.status(400).send("An error ocurred.")
  }


};

module.exports = {getAllStudents, getStudentById, addStudent, deleteStudent, updateStudent}
