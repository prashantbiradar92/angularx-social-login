import { Directive, ElementRef} from '@angular/core';
import { take } from 'rxjs';
import { SocialAuthService } from '../socialauth.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'asl-google-signin-button',
})
export class GoogleSigninButtonDirective {
  constructor(
    el: ElementRef,
    socialAuthService: SocialAuthService
  ) {
    socialAuthService.initState.pipe(take(1)).subscribe(() => {
      google.accounts.id.renderButton(el.nativeElement, {
        type: 'standard',
        shape: "pill",
        theme:"outline",
        text:"signin_with",
        size:"large",
        logo_alignment:"left",
        width:"300"
      });
    })
  }
}
