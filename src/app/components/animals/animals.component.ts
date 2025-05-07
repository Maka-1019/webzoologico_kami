import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-animals',
  imports: [ReactiveFormsModule],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent {
  animalList: any = [];
  animalForm: FormGroup | any;

  constructor(private animalService: AnimalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
  }


  getAllAnimals() {
    console.log('en componente');
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.animalForm = this.formBuilder.group({
      nombre: '',
      edad: 0,
      tipo: ''
    });
    this.getAllAnimals();
  }

  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }

  newAnimalEntry() {
    this.animalService.newAnimal(this.animalForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /inicio y recargando la ventana
        this.router.navigate(['/inicio']);
        /*.then(() => {
          this.newMessage('Registro exitoso');
        })*/
      }
    );
  }



}
