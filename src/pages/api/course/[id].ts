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
        },
      });

      const dateList = new Set();

      data.students.forEach((student: any) =>
        student.courses.forEach((course: any) =>
          course.exams.forEach((exam: any) => dateList.add(`${course.id},${exam.date}`))
        )
      );

      return res.status(200).send({ info: Array.from(dateList.values())});
    }
    case "POST": {
      const { date } = req.body;
      const foundExam = await prisma.exam.findFirst({
        where: {
          date: date as string,
        },
      });


      let exam = null;
      if (foundExam) {
        exam = await prisma.exam.update({
          where: {
            id: foundExam.id as string,
          },
          data: {
            date: date as string,
          },
        });
        
      } else {
        exam = await prisma.exam.create({
          data: {
            date: date as string,
            courseId: id as string,
          },
        });

      }

      return res.status(200).send(exam);
    }
  }
};

export default handler;
