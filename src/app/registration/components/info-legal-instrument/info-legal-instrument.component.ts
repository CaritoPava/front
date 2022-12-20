import { Component, Input } from '@angular/core';
import { LegalInstrumentComplete, AnswerLegalInstrument } from '../../interfaces/interfaces';
import { AnswersLegalInstrumentService } from '../../services/answers-legal-instrument.service';

@Component({
  selector: 'app-info-legal-instrument',
  templateUrl: './info-legal-instrument.component.html',
  styleUrls: ['./info-legal-instrument.component.css']
})
export class InfoLegalInstrumentComponent {

@Input() legalInstrument!: LegalInstrumentComplete ;
@Input() answer!: AnswerLegalInstrument;

index: number = 0;

    openNext() {
        this.index = (this.index === 2) ? 0 : this.index + 1;
    }

    openPrev() {
        this.index = (this.index === 0) ? 2 : this.index - 1;
    }

}
