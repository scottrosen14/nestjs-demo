import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { MetaOption } from "../meta-option.entity";
import { CreatePostMetaOptionsDto } from "../dtos/create-post-meta-options.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>
  ) {
  }
  public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    const metaOption = await this.metaOptionsRepository.create(createPostMetaOptionsDto);
    return await this.metaOptionsRepository.save(metaOption);
  }
}
