import { Injectable } from '@angular/core';
import { ActionService } from './Action.service';
import { Actions, Action } from '../../model';

import { AbstractStore } from '../entity/entity.store';
import { EventsService } from '../entity/events.service';

@Injectable()
export class ActionStore extends AbstractStore<Action, Actions, ActionService> {
  constructor(ActionService: ActionService, eventService: EventsService) {
    super(ActionService, eventService, [], <Action>{});
  }

  protected get kind() {
    return 'Action';
  }
}
