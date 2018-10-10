import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {uuid} from "./utils";
import {login} from "./login.middleware";

const cors = require('cors');
const session = require('express-session');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors({
        origin: "http://localhost:9528",
        credentials: true
    }));
    app.use(session({
        name: 'Admin-Token',
        secret: uuid(),
        resave: true,
        saveUninitialized: true,
        cookie: {maxAge: 60 * 1000 * 60, httpOnly: true}
    }));
    app.use(login);
    await app.listen(3000);
}

bootstrap();
