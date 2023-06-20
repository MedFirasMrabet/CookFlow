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
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const note_schema_1 = require("./models/note.schema");
const mailer_service_1 = require("../shared/mail-service/mailer.service");
let NoteService = class NoteService {
    constructor(noteModel, mailerService) {
        this.noteModel = noteModel;
        this.mailerService = mailerService;
    }
    async create(note) {
        const createdNote = new this.noteModel(note);
        return createdNote.save();
    }
    async findAll() {
        return this.noteModel.find().populate('sender').populate('recipient').exec();
    }
    async findAllNotSeen() {
        return this.noteModel.find({ seen: false }).populate('sender').populate('recipient').exec();
    }
    async findByRecipient(recipientId) {
        return this.noteModel.find({ recipient: recipientId }).exec();
    }
    async delete(id) {
        await this.noteModel.findByIdAndRemove(id).exec();
    }
    async sendNotificationNote() {
        const notes = await this.findAllNotSeen();
        notes.map(note => {
            this.mailerService.sendEmail(note['recipient']['email'], '[NOTE IMPORTANTE!]', note['content'], note['recipient']['email']);
        });
    }
};
NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mailer_service_1.MailerService])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map