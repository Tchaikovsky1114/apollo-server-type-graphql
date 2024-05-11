"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobResolver = void 0;
const Job_1 = require("./../schema/Job");
const type_graphql_1 = require("type-graphql");
let JobResolver = class JobResolver {
    async jobs() {
        // will be replaced with actual service logic.
        return [
            {
                id: "1",
                title: "Software Engineer",
                description: "A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software."
            },
            {
                id: "2",
                title: "Product Manager",
                description: "A product manager is a professional role that is responsible for the development of products for an organization, known as the practice of product management."
            }
        ];
    }
    async findJobById(id) {
        // will be replaced with actual service logic.
        return {
            id,
            title: "Software Engineer",
            description: "A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software."
        };
    }
};
exports.JobResolver = JobResolver;
__decorate([
    (0, type_graphql_1.Query)(returns => [Job_1.Job], { description: "Get all jobs.", nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobResolver.prototype, "jobs", null);
__decorate([
    (0, type_graphql_1.Query)(() => Job_1.Job),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobResolver.prototype, "findJobById", null);
exports.JobResolver = JobResolver = __decorate([
    (0, type_graphql_1.Resolver)(Job_1.Job)
], JobResolver);
