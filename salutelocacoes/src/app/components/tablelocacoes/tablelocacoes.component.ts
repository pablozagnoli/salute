import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablelocacoes',
  templateUrl: './tablelocacoes.component.html',
  styleUrls: ['./tablelocacoes.component.css'],
})
export class TablelocacoesComponent implements OnInit {
  displayedColumns: string[] = [
    'nomecliente',
    'dataentrega',
    'dataretirada',
    'entregue',
  ];

  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {}

  ngOnInit() {}

  clickedRow(row: any) {
    this.router.navigate(['detalheslocacao'], {
      queryParams: {
        numorca: row.nomecliente,
      },
    });
  }
}

export interface PeriodicElement {
  nomecliente: string;
  dataentrega: string;
  dataretirada: string;
  entregue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    nomecliente: 'Estetica Larissa',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'SIM',
  },
  {
    nomecliente: 'Estetica feminina',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'NÃO',
  },
  {
    nomecliente: 'Clinica tuttu',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'NÃO',
  },
  {
    nomecliente: 'Consultorio adriana',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'SIM',
  },
  {
    nomecliente: 'Laser feshion',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'NÃO',
  },
  {
    nomecliente: 'Clinica tuttu',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'NÃO',
  },
  {
    nomecliente: 'Consultorio adriana',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'SIM',
  },
  {
    nomecliente: 'Clinica tuttu',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'NÃO',
  },
  {
    nomecliente: 'Consultorio adriana',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'SIM',
  },
  {
    nomecliente: 'Clinica tuttu',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'NÃO',
  },
  {
    nomecliente: 'Consultorio adriana',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'SIM',
  },
  {
    nomecliente: 'Clinica tuttu',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'NÃO',
  },
  {
    nomecliente: 'Consultorio adriana',
    dataentrega: '12/05/2023 - 18:55',
    dataretirada: '12/05/2023 - 18:55',
    entregue: 'SIM',
  },
];
