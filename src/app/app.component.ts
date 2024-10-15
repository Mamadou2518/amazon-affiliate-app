import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'; // Correct import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent], // Add ProductListComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})
export class AppComponent {
  title = 'amazon-affiliate-app';
}
