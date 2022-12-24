import { Component } from '@angular/core';
import { LegalInstrumentServiceService } from '../../services/legal-instrument-service.service';
import { LegalInstrumentComplete, legalInstrumentForView } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';
import { pipe, tap } from 'rxjs';

@Component({
  selector: 'app-all-legal-instruments',
  templateUrl: './all-legal-instruments.component.html',
  styleUrls: ['./all-legal-instruments.component.css']
})
export class AllLegalInstrumentsComponent {

  constructor(private legalInstrumentService: LegalInstrumentServiceService) {  }

  legalInstrument!:LegalInstrumentComplete
  legalInstruments:LegalInstrumentComplete[] = []
  legalInstrumentsForView: legalInstrumentForView = {
    id:0,
    filing:'',
    detail:'',
    rights:'',
    plaintiffsRequest:'',
    fundamentalsMinistryLaw:'',
    ministryRequest:'',
    notifications:'',
    anexos:'',
    companyRequest:'',
    basicsOfBusinessLaw:'',
    failed:'',
    contemptIncident:'',
    isActive:'',
    creationDate:'',
    typeInstrument:'',
    microenterprise:'',
    employeeResponsible:'',
    employeeChecked:'',
    stateLegalInstrument:''
  }
  legalInstrumentForViewList: legalInstrumentForView[] = []



  getLegalInstruments(){
    this.legalInstrumentService.getAllLegalInstruments().subscribe((legalInstruments) => {
      this.legalInstruments = legalInstruments
    },
    (err) => {
      console.log(err);
      Swal.fire('Error', 'No se pudo obtener los documentos legales', 'error')
    }

    )

  }

  delete(id:number){

    Swal.fire({
      title: '¿Está seguro?',
      text: "No podrá revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.legalInstrumentService.deleteLegalInstrument(id).subscribe((data) => {
          this.getLegalInstruments();
          Swal.fire(
            'Eliminado',
            'El documento legal ha sido eliminado',
            'success'
          )
        },
        (err) => {
          console.log(err);
          Swal.fire('Error', 'No se pudo eliminar el documento legal', 'error')
        }
        )
      }
    })

  }


  ngOnInit(): void {
    this.getLegalInstruments();

  }


}
