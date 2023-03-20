import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';
import { HttpAdapter } from '../../services/http.service';
import {
  Corresponsales,
  Oficina,
} from '../../interfaces/corresponsales.interface';

@Component({
  selector: 'app-create-details',
  templateUrl: './create-details.component.html',
  styleUrls: ['./create-details.component.scss'],
})
export class CreateDetailsComponent implements OnInit {
  constructor(
    private readonly httpAdapter: HttpAdapter,
    private fb: FormBuilder
  ) {}

  corresponsalForm!: FormGroup;
  oficinasForm!: FormGroup;
  girosForm!: FormGroup;

  private readonly route: string = environment.API;

  corresponsales!: any;
  oficinas!: any;

  ngOnInit(): void {
    this.buildForms();
    this.getData();
  }

  getData(): void {
    this.httpAdapter
      .get<Corresponsales[]>(`${this.route}corresponsales`)
      .subscribe({
        next: (values) => {
          this.corresponsales = values.map((element) => {
            return {
              corCorresponsalId: element.corCorresponsalId,
              corNombre: element.corNombre,
            };
          });
        },
      });

    this.httpAdapter.get<Oficina[]>(`${this.route}oficinas`).subscribe({
      next: (values) => {
        this.oficinas = values.map((value) => {
          return {
            ofiOficinaId: value.ofiOficinaId,
            ofiNombre: value.ofiNombre,
          };
        });
      },
    });
  }

  createCorresponsal(): void {
    this.httpAdapter.post(
      `${this.route}corresponsales`,
      this.corresponsalForm.value
    );
  }

  createOficina(): void {
    this.httpAdapter.post(`${this.route}oficinas`, this.oficinasForm.value);
  }

  createGiro(): void {
    this.httpAdapter.post(`${this.route}giros`, this.girosForm.value);
  }

  private buildForms(): void {
    this.corresponsalForm = this.fb.group({
      corNombre: ['', Validators.required],
    });

    this.oficinasForm = this.fb.group({
      ofiNombre: ['', Validators.required],
      ofiCorresponsalId: ['', Validators.required],
    });

    this.girosForm = this.fb.group({
      girRecibo: ['', Validators.required],
      girOficinaId: ['', Validators.required],
    });
  }
}
