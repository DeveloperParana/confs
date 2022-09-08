import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

import { MeetupMember } from '@confs/shared/api-interfaces';

import { AppStorage } from './app.storage';
import { env } from '../envs/env';

interface AppStorageMap {
  members: MeetupMember[];
  membersLastUpdate: Date;
}

function dayDiff(d1: Date, d2: Date) {
  let days;
  days = (d2.getFullYear() - d1.getFullYear()) * 365;
  days -= d1.getDay();
  days += d2.getDay();
  return days <= 0 ? 0 : days;
}

@Injectable()
export class AppService {
  private _storage = new AppStorage<AppStorageMap>(localStorage);

  constructor(private _http: HttpClient) {}

  get() {
    const now = new Date();
    const date = this._getLastUpdate();

    if (!date) {
      this._updateLocal()([]);
    }

    const members = this._fromLocalStorage();

    if ((date && dayDiff(now, date) > 7) || !members.length) {
      return this._fromRestAPI();
    }

    return of(members);
  }

  private _fromLocalStorage(): MeetupMember[] {
    const localData = this._storage.get('members');
    if (localData && typeof localData === 'string') {
      try {
        return JSON.parse(localData) as MeetupMember[];
      } catch (err) {
        return [];
      }
    }

    return [];
  }

  private _fromRestAPI() {
    const url = `${env['server.api']}/members`;
    return this._http.get<MeetupMember[]>(url).pipe(tap(this._updateLocal()));
  }

  private _getLastUpdate() {
    const date = this._storage.get('membersLastUpdate');
    return date ? new Date(date) : null;
  }

  private _updateLocal(date = new Date().toUTCString()) {
    return (members: MeetupMember[]) => {
      const value = JSON.stringify(members);
      this._storage.set('members', value);
      this._storage.set('membersLastUpdate', date);
    };
  }
}
