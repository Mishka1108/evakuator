import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
currentYear = new Date().getFullYear();

  // სერვისებზე გადასვლა
  scrollToServices(): void {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // საავარიო ზარი
  callEmergency(): void {
    window.location.href = 'tel:+995555123456';
  }

  // სერვისის მოთხოვნა
  requestService(): void {
    // ეს შეიძლება იყოს მოდალის გახსნა ან სერვის გვერდზე გადასვლა
    console.log('სერვისის მოთხოვნა');
    // შეგიძლიათ დაამატოთ რაუტინგი ან მოდალი
  }

  // სოციალური მედია
  openSocialMedia(platform: string): void {
    const urls = {
      facebook: 'https://facebook.com/margoevacu',
      instagram: 'https://instagram.com/margoevacu'
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], '_blank');
    }
  }

  // WhatsApp-ის გახსნა
  openWhatsApp(): void {
    const phoneNumber = '995555123456';
    const message = 'გამარჯობა, მინდა ევაკუატორის სერვისი';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  // კონფიდენციალურობის პოლიტიკა
  openPrivacyPolicy(): void {
    console.log('კონფიდენციალურობის პოლიტიკის გახსნა');
    // დაამატეთ რაუტინგი ან მოდალი
  }

  // მომსახურების პირობები
  openTerms(): void {
    console.log('მომსახურების პირობების გახსნა');
    // დაამატეთ რაუტინგი ან მოდალი
  }

  // FAQ
  openFAQ(): void {
    console.log('FAQ-ს გახსნა');
    // დაამატეთ რაუტინგი ან მოდალი
  }
}
