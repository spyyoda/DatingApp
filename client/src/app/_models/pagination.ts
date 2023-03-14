export interface Pagination{
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedResuts<T>{
    result?: T;
    pagination?: Pagination;
}