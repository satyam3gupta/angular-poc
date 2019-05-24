import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {
    private subject = new Subject<any>();
    isSelected: boolean = false;
    heading = 'Dashboard';
    sendMessage(isSelected: boolean) {
        this.subject.next(isSelected);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
