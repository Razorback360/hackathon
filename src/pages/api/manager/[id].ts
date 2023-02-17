// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  switch (req.method) {
    case "GET": {
      const courses = await prisma.course.findMany({
        where: {
          managerId: id as string,
        },
        include: {
          exams: true
        },
      
      });
      
      const modifiedCourses = await Promise.all(courses.map(async (course) => {
        let conflict = false;
        let reserved = false;

        let courseExams = course.exams;
        
        if (courseExams.length > 0){
          reserved = true;
        }
        let courseExamsIDs = courseExams.map(exam => {
          return exam.id;
        })
        let dates = courseExams.map(exam => {
          return exam.date;
        })
        let allExams = await prisma.exam.findMany({
            where:{
              NOT:{
                id: {
                  in: courseExamsIDs
                }
              }
            }
        })

        let allExamsDates = allExams.map(exam => {
          return exam.date;
        })
          
        for (let i = 0; i < allExamsDates.length; i++) {
          if (dates.includes(allExamsDates[i])){
            conflict = true;
            break;
          }
        }
        return {course,conflict,reserved};

      }))
      return res.status(200).send(modifiedCourses);
    }
  }
};

export default handler;
