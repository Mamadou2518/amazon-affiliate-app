import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common'; // Importez CommonModule

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
  standalone: true,
  imports: [RouterModule, SideMenuComponent, CommonModule], // Ajoutez CommonModule ici
})
export class HeadersComponent implements OnInit {
  menuOpen = false;
  profileMenuOpen = false;
  cartCount = 0;
  favoritesCount = 0;

  @ViewChild('profileRef') profileRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleProfileMenu(): void {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event): void {
    if (this.profileRef && !this.profileRef.nativeElement.contains(event.target)) {
      this.profileMenuOpen = false;
    }
  }
}
