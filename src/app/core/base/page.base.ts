export class PageBase {
  constructor(
    public loading: boolean = true,
    public submitted: boolean = false,
    public submitting: boolean = false
  ) {}
}
