import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable, of } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, listToDoc, toDoc, delayRes } from '../../util/http-util';
import { Group, TYPE_GRUPO } from '../../shared/models/group.model';
import { groups } from './group.mock';

@Injectable()
export class GroupsService extends BaseService<Group> {

  data: Group[] = [];
  idFarm: string;

  constructor(private http: HttpClient, private session: SessionService) {
    super();
    this.idFarm = session.farmId;
  }

  add(item: Group): Observable<string> {
    item.type = TYPE_GRUPO;
    item.finca = this.session.farmId;
    item.channels = [this.session.id];
    return this.http.post<Rspn<string>>(this.makeUrl('grupos'), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item)),
      mergeMap(x => delayRes(x))
    );
  }

  list(): Observable<Group[]> {
    return this.http.get<Rspn<Doc<Group>[]>>(this.makeUrl('grupos', 'finca', this.session.farmId), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
  }

  update(item: Group): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('grupos', id), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('grupos', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Group> {
    return this.http.get<Rspn<Doc<Group>>>(this.makeUrl('grupos', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
