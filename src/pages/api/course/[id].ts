// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      const { id } = req.query;

      const course = await prisma.course.findFirst({
        where: {
          id: id as string,
        },
        include: {
          students: {
            exams: {
              select: {
                date: true,
              },
            },
          },
        },
      });
      return res.status(200).send(course);
    }
  }
};

export default handler;
