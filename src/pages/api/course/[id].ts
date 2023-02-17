// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  switch (req.method) {
    case "GET": {
      const course = await prisma.course.findFirst({
        where: {
          id: id as string,
        },
        select: {
          students: {
            select: {
              courses: {
                include: {
                  exams: {
                    select: {
                      date: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      return res.status(200).send(course);
    }
    case "POST": {
      const {date} = req.body;
      const foundExam = await prisma.exam.findFirst({
        where:{
          date: date,
        }
      })
      
      let exam = null;
      if (foundExam){
          exam = await prisma.exam.update({
            where: {
              id: foundExam.id as string
            },
            data: {
              date: date,
            }
          })   

      } else {
        exam = await prisma.exam.create({
          data: {
            date: date,
            courseId: id as string,
            managerId: "fdsf"
          }
      });

      return res.status(200).send(exam);
      }
  }
  }
};

export default handler;
