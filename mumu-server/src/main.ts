import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {uuid} from "./utils";

const cors = require('cors');
const session = require('express-session');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors({
        origin: "http://localhost:9528",
        credentials: true
    }));
    app.use(session({
        genid: function (req) {
            return uuid() // use UUIDs for session Ids
        },
        secret: uuid(),
        resave: true,
        saveUninitialized: false,
        cookie: {maxAge: 60 * 1000 * 60, httpOnly: true}
    }));
    await app.listen(3000);
}

bootstrap();
