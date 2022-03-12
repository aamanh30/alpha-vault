import { Subject } from 'rxjs';

export class PageBase {
  unsubscribe: Subject<any> = new Subject<any>();
  constructor(
    public loading: boolean = true,
    public submitted: boolean = false,
    public submitting: boolean = false
  ) {}
}
