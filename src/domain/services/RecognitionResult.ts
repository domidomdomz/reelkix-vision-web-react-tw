import type { ShoeAnalysis } from '../../application/dtos/ShoeAnalysisDTO'
import { Brand } from '../value-objects/Brand'
import { Model } from '../value-objects/Model'
import { Colorway } from '../value-objects/Colorway'
import { SKU } from '../value-objects/SKU'
import { Shoe } from '../entities/Shoe'

export class RecognitionResult {
    private shoeAnalysisDto: ShoeAnalysis;


  constructor(shoeAnalysisDto: ShoeAnalysis) {
    this.shoeAnalysisDto = shoeAnalysisDto;
  }

  get dto(): ShoeAnalysis {
    return this.shoeAnalysisDto
  }

  toDomain(): Shoe {
    return new Shoe(
      new Brand(this.dto.brand),
      new Model(this.dto.model),
      new Colorway(this.dto.colorway),
      new SKU(this.dto.sku),
      this.dto.confidence,
      this.dto.text
    )
  }
}
