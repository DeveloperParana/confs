import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { normalizeKeys } from '@confs/shared/util-format';

import { Subscribe } from './entities/subscribe.entity';
import { CreateSubscribeDto } from './dto';

@Injectable()
export class SubscribeService {
  constructor(
    @Inject('subscribe.model')
    private readonly _model: Model<Subscribe>
  ) {}

  async create(createSubscribeDto: CreateSubscribeDto): Promise<Subscribe> {
    const promise = new this._model(createSubscribeDto).save();

    return promise.then((subscribe) =>
      normalizeKeys<unknown, Subscribe>(subscribe.toJSON())
    );
  }

  async findAll(): Promise<Subscribe[]> {
    const promise = this._model.find().exec();

    return promise.then((subscribes) =>
      subscribes.map((subscribe) =>
        normalizeKeys<unknown, Subscribe>(subscribe.toJSON())
      )
    );
  }

  async findOne(id: string): Promise<Subscribe> {
    const promise = this._model.findOne({ id }).exec();

    return promise.then((subscribe) =>
      normalizeKeys<unknown, Subscribe>(subscribe.toJSON())
    );
  }
}
