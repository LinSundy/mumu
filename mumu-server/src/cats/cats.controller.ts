import {Controller, Get, Post, Body, Req} from '@nestjs/common';
import {CatsDto} from "./cats.dto";
import {CatsService} from "./cats.service";

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll(): Promise<CatsDto[]> {
        return this.catsService.findAll();
    }

    @Post('world')
    async create(@Body() CatsDto: CatsDto) {
        this.catsService.create(CatsDto);
    }
}