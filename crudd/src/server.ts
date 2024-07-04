import app from "@/src/app"
import configs from '@/src/utils/config'
import { connectMongoDB } from "./database/connection";

 async function run() {
     await connectMongoDB()
    app.listen(configs.port, () => {
        console.log(`User Service running on Port: ${configs.port}`)
    })
}

run();