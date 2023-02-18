// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  switch (req.method) {
    case "GET": {
      const data = await prisma.course.findFirst({
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
          name: true,
          exams: true
        },
      });

      const dateList = new Set();

      data?.students.forEach((student: any) =>
        student.courses.forEach((course: any) =>
          course.exams.forEach((exam: any) =>{
            dateList.add(`${course.id},${exam.date}`)}
          )
        )
      );

      // const course = await prisma.course.findFirst({
      //   where: {
      //     id: id as string
      //   },
      //   include: {
      //     exams:true
      //   }
      // })

      return res.status(200).send({ dates: Array.from(dateList.values()), courseExams:data?.exams, name:data?.name});
    }
    case "POST": {
      const { date } = JSON.parse(req.body);
      
      const exam = await prisma.exam.create({
        data: {
          date: date as string,
          courseId: id as string,
        },
      });

      return res.status(200).send(exam);
    }
    case "DELETE": {
      const { examId }  = JSON.parse(req.body);
      console.log(req.body, examId)
      const exam = await prisma.exam.delete({
        where: {
          id: examId as string
        }
      });

      return res.status(200).send(exam);
    }
  }
  
};

export default handler;
