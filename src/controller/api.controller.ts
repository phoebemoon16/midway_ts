import { Inject, Controller, Get, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { PhotoService } from '../service/photo.service';
// import { Photo } from '../entity/photo';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;
  
  @Inject()
  photoService: PhotoService;

  @Get('/save_user')
  async getUser() {
    const user = await this.userService.saveUser();
    return { success: true, message: 'OK', data: user };
  }

  @Post('/save_photo')
  async savePhotoController() {
    console.log(this.ctx.request.body, 'this.ctx.request.body')
    const photo = await this.photoService.savePhoto(this.ctx.request.body);

    // await this.photoService.savePhoto(@Body() photo:Photo);
    return { success: true, message: 'OK', data: photo };
  }

  @Get('/get_photo')
  async getPhotoController(){
    const photos = await this.photoService.findPhotos()
    return { success: true, message: 'OK', data: photos }
  }

  @Get('/get_photo_by_name')
  async getPhotoByNameController(){
    const photo = await this.photoService.findPhotosByName({name: this.ctx.query.name})
    return { success: true, message: 'OK', data: photo };
  }
}
