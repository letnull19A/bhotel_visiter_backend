import dotenv from 'dotenv'

const main = async () => {
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
}

main().catch(console.error)