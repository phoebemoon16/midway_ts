import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';

@Provide()
export class PhotoService {

  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  // save
  async savePhoto(photo: Photo) {
    // create a entity object    
    // let photo = new Photo();
    // photo.name = 'Me and Bears';
    // photo.description = 'I am near polar bears';
    // photo.filename = 'photo-with-bears.jpg';
    // photo.views = 1;
    // photo.isPublished = true;

    // save entity
    const photoResult = await this.photoModel.save(photo);
    console.log(photoResult, 'photoResult')
    // save success
    console.log('photo id = ', photoResult.id);

    // return photoResult
  }

  // find
  async findPhotos() {
    // find All
    let allPhotos = await this.photoModel.find();
    return allPhotos
    console.log("All photos from the db: ", allPhotos);
  }

  async findPhotosByName(name){
    let photo = await this.photoModel.find(name);
    return photo
  }
}