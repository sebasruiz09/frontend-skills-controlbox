import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpAdapter } from '../../services/http.service';
import {
  Corresponsales,
  Oficina,
} from '../../interfaces/corresponsales.interface';

@Component({
  selector: 'app-detalle-a',
  templateUrl: './detalle-a.component.html',
  styleUrls: ['./detalle-a.component.scss'],
})
export class DetalleAComponent implements OnInit {
  constructor(private HttpAdapter: HttpAdapter) {}

  private readonly route: string = environment.API;

  data!: Corresponsales[];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.HttpAdapter.get<Corresponsales[]>(
      `${this.route}corresponsales`
    ).subscribe({
      next: (values) => {
        this.data = values;
      },
    });
  }

  deleteCorresponsal(oficina: Oficina): void {
    this.HttpAdapter.delete(
      `${this.route}oficinas/${oficina.ofiOficinaId}`
    ).subscribe({
      next: () => {
        this.getData();
      },
    });
  }

  automaticGiro(id: string): void {
    this.HttpAdapter.post(`${this.route}giros`, {
      girOficinaId: id,
      girRecibo: Math.floor(Math.random() * 10) + 1,
    }).subscribe({
      next: () => {
        this.getData();
      },
    });
  }
}
