import {Status} from "./status";

export class Tarefa {

  id: number;
  titulo: string;
  dataInicio: string;
  dataConclusao: string;
  status: string;
  descricao: string;
  constructor(titulo: string, dataIni: string,
              dataCon: string, desc: string,
              sta: string, id: number) {
    this.titulo= titulo;
    this.dataInicio= dataIni;
    this.dataConclusao = dataCon;
    this.descricao= desc;
    this.status = sta;
    this.id = id;
  }

}
