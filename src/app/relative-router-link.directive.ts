import { Directive, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Directive({
  selector: 'a[appRelativeRouterLink]',
})
export class RelativeRouterLinkDirective extends RouterLinkWithHref {
  readonly url: string;

  @Input()
  set appRelativeRouterLink(suffix: string) {
    this.href = this.routerLink = `${this.url}/${suffix}`;
  }

  constructor(
    router: Router,
    route: ActivatedRoute,
    locationStrategy: LocationStrategy,
  ) {
    super(router, route, locationStrategy);
    this.url = router.url;
  }
}
