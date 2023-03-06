import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];

  costructor() {}

  ngOnInit(): void{

    let work1 = {
      fecha : "2020-2021",
      ubicacion : "Monterrey, Nuevo Leon",
      puesto : "Unity jr",
      empresa : "ITESM",
      logros : [
        {descripcion : "Encargado de unity"},
        {descripcion : "Diseno y Logica"}
      ]
    };

    let work2 = {
      fecha : "2022-2023",
      ubicacion : "Tijuana, Baja California",
      puesto : "Swift jr",
      empresa : "ITESM",
      logros : [
        {descripcion : "Frontend Swift"},
        {descripcion : "Logica Permisos"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);

  };

}


