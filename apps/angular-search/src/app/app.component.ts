import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  standalone: true,
  imports: [RouterModule, TranslocoDirective],
  selector: 'diloc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-search';
}
