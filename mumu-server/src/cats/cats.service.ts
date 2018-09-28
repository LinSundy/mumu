import {Injectable} from '@nestjs/common';

interface Cats {
    name: string,
    age: number
}

@Injectable()
export class CatsService {
    private readonly cats: Cats[] = [];

    // provide func
    create(cat: Cats) {
        this.cats.push(cat);
    }

    // provide value
    findAll(): Cats[] {
        return this.cats;
    }
}