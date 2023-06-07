import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './models/note.schema';
import { ApiTags } from '@nestjs/swagger';
import { CreateNoteDto } from './dto/note.dto';

ApiTags('Notes')
@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  async create(@Body() note: CreateNoteDto): Promise<Note> {
    return this.noteService.create(note);
  }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Get('recipient/:recipientId')
  async findByRecipient(@Param('recipientId') recipientId: string): Promise<Note[]> {
    return this.noteService.findByRecipient(recipientId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.noteService.delete(id);
  }
}
