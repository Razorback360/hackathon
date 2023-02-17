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
      });

      return res.status(200).send(courses);
    }
  }
};

export default handler;
