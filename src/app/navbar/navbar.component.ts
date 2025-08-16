import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 isMenuOpen = false;
  activeLink = 'home';

  ngOnInit() {
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false;
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  makeEmergencyCall() {
    // აქ შეგიძლიათ დაამატოთ რეალური ზარის ფუნქციონალი
    window.open('tel:032123456', '_self');
    alert('გადაუდებელი დარეკვა: 032 123 456');
  }
}
