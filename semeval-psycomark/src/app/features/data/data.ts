import { Component } from '@angular/core';

@Component({
  selector: 'app-data',

  templateUrl: './data.html',
  styleUrl: './data.css'
})
export class Data {
  releaseDate = 'March 31, 2025';
  license = 'CC-BY';
  datasetUrl = 'https://doi.org/10.5281/zenodo.15114171';
  starterPackUrl = 'https://github.com/hide-ous/semeval26_starter_pack';
}
