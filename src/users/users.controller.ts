import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service'; 
import {  CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users') 
export class UsersController {

   constructor(private readonly usersService: UsersService) {}

   /*
   GET /users/:id
   POST /users
   PATCH /users/:id
   DELETE /users/:id
   */

   
   // @Get()
   // findAll() {
   //    return []
   // }

   @Get()
   findAll(@Query('role') role: 'INTERN' | 'ADMIN') { // Example default: 'INTERN'
      console.log('Role:', role);
      // return [];
      return this.usersService.findAll(role)
   }
   
   // @Get(@Query('role') role?: 'INTERN' | 'ADMIN')
   // findAll() {
   //    return []
   // }

  

   @Get('interns')
   findAllInterns() {
      return []
   }

   @Get(':id')
   findOne(@Param('id', ParseIntPipe) id: number) {
      // return { id }
      return this.usersService.findOne(id)
   }

   @Post()
   Create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
      // return user
      return this.usersService.create(createUserDto)
   }

   @Patch(':id')
   update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
      // return {id, ...userUpdate}
      return this.usersService.update(id, updateUserDto)
   }

   @Delete(':id')
   delete(@Param('id', ParseIntPipe) id: number) {
      // return { id }
      return this.usersService.delete(id)
   }
}
