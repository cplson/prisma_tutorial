import { PrismaClient } from '@prisma/client'
// optionally you can
// const prisma = new PrismaClient({ log: ["query"] })
//which will console.log any query that is ran on the db
const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here

    // this will ensure that we start fresh any time the program is run
    // await prisma.user.deleteMany();

    // const user = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Kyle",
    //             email: "kyle@test.com",
    //             age: 27,
    //         },
    //         {
    //             name: "Sally",
    //             email: "sally@test.com",
    //             age: 32
    //         }
    //     ]
    // })

    // find a unique field or block
    // const user = await prisma.user.findUnique({
    //     // where: {
    //     //     email: "kyle@test.com"
    //     // }
    //     where: {
    //         age_name: {
    //             age: 27,
    //             name: "Kyle"
    //         }
    //     }
    // })

    // find first instance of a user that has the name of "Sally"
    // const user = await prisma.user.findFirst({
    //     // where: {
    //     //     email: "kyle@test.com"
    //     // }
    //     where: {
    //         name: "Sally"
    //     }
    // })
    
    // await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Sally",
    //             age: 21,
    //             email: "sally@test3.com"
    //         }
    //     ]
    // })

    // findMany gets all instances in the table that meets the conditions you define
    const user = await prisma.user.findMany({
        // where: {
        //     email: "kyle@test.com"
        // }
        where: {
            name: "Sally"
        }
    })
    console.log(user);
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })