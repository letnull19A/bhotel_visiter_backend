import { log, error } from 'console'
import dotenv from 'dotenv'
import { env } from 'process'

const main = async (): Promise<void> => {
    dotenv.config({ path: `.env.${env.NODE_ENV}` })

    log(`Server started on ${env.NODE_ENV} mode`)
}

main().catch(error)