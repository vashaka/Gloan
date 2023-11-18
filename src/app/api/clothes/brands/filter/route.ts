import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

export async function POST(req: Request, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { brandName } = reqBody;

    const filterByBrandName = await prisma.clothe.findMany({
      where: {
        brand: {
          mode: "insensitive",
          startsWith: brandName,
        },
      },
    });

    return NextResponse.json({
      message: "brand filltered successfully",
      data: filterByBrandName,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
