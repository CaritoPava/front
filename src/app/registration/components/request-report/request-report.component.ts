import { Component } from '@angular/core';
import { DocumentsAndReportsService } from '../../services/documents-and-reports.service';
import { ReportLegalInstrumentsByState } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-report',
  templateUrl: './request-report.component.html',
  styleUrls: ['./request-report.component.css']
})
export class RequestReportComponent {

  constructor( private documentsAndReportsService:DocumentsAndReportsService) { }

  report : ReportLegalInstrumentsByState = {
    amount:0,
    name:'',
  }

  reportList: ReportLegalInstrumentsByState[] = []

  getLegalInstumentsByState(){
    this.documentsAndReportsService.getLegalInstumentsByState().subscribe((data) => {
      this.reportList = data;
    },
    (err) => {
      Swal.fire('Error', 'No se pudo obtener el reporte', 'error')
    }
    )
  }


}
