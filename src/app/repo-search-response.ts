import { Repo } from "./repo";

export class RepoSearchResponse {
    constructor(    
        public total_count: number,
        public items: Repo[]
    )
    {}
}
