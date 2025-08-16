import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 services: Service[] = [
    {
      id: 1,
      title: 'მსუბუქი ავტომობილების ევაკუაცია',
      description: 'სედანი, ჰეჩბეკი, უნივერსალი - 24/7 სერვისი',
      price: '80 ლარიდან',
      icon: 'fas fa-car'
    },
    {
      id: 2,
      title: 'SUV და მინივენების ევაკუაცია',
      description: 'დიდზომიანი ავტომობილების გადატანა',
      price: '100 ლარიდან',
      icon: 'fas fa-truck'
    },
    {
      id: 3,
      title: 'მოტოციკლების ევაკუაცია',
      description: 'მოტოციკლი, სკუტერი, ATV',
      price: '50 ლარიდან',
      icon: 'fas fa-motorcycle'
    },
    {
      id: 4,
      title: 'შორი მანძილის ევაკუაცია',
      description: 'ქალაქთაშორისო გადატანა',
      price: 'შეთანხმებით',
      icon: 'fas fa-route'
    }
  ];

  testimonials = [
    {
      name: 'ლუკა მამისეიშვილი',
      rating: 5,
      comment: 'ძალიან სწრაფი და პროფესიონალური სერვისი. რეკომენდაცია!'
    },
    {
      name: 'ნინო ლორთქიფანიძე',
      rating: 5,
      comment: '24 საათში მუშაობენ, ფასი გონივრული. მადლობა!'
    },
    {
      name: 'გიორგი ქელაშვილი',
      rating: 5,
      comment: 'ავტომობილი უსაფრთხოდ გადმოიტანეს. კმაყოფილი ვარ!'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization logic
  }

  callEmergency(): void {
    window.location.href = 'tel:+995555123456';
  }

  requestService(serviceId: number): void {
    this.router.navigate(['/request'], { queryParams: { service: serviceId } });
  }

  scrollToServices(): void {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
