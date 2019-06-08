import { User } from "./user";

export class SearchResponse {
    constructor(    
        public total_count: number,
        public items: User[]
    )
    {}
}
