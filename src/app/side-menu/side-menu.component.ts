import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class SideMenuComponent {
  @Input() menuOpen = false;
  @Output() menuClose = new EventEmitter<void>();

  constructor(private library: FaIconLibrary) {
    library.addIcons(faTimes);
  }

  closeMenu() {
    this.menuClose.emit();
  }

  menuItems = [
    { icon: 'assets/images/homeIcon.png', label: 'Accueil', route: '/' },
    { icon: 'assets/images/exploreIcon.png', label: 'Explorer', route: '/explorer' },
    { icon: 'assets/images/favoritesIcon.png', label: 'Favoris', route: '/favorites' },
    { icon: 'assets/images/historyIcon.png', label: 'Historique des achats', route: '/history' },
    { icon: 'assets/images/profileIcon.png', label: 'Profil', route: '/profile' },
    { icon: 'assets/images/settingsIcon.png', label: 'Paramètres', route: '/settings' },
    { icon: 'assets/images/contactIcon.png', label: 'Nous contacter', route: '/contact' },
    { icon: 'assets/images/adminIcon.png', label: 'Console admin', route: '/admin' },
  ];
}
