import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MetaOption } from "./meta-option.entity";
import { MetaOptionsService } from './providers/meta-options.service';
import { Repository } from "typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([MetaOption])],
  controllers: [MetaOptionsController],
  providers: [MetaOptionsService]
})
export class MetaOptionsModule {}
