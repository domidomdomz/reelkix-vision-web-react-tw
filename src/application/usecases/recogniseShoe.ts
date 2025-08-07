import { Shoe } from "../../domain/entities/Shoe";
import { uploadAndAnalyze } from "../../infrastructure/api/shoeApi";
import { RecognitionResult } from "../../domain/services/RecognitionResult";

export interface RecognitionResponse {
  message: string
  imageUrl: string
  shoe: Shoe
}

export const recogniseShoe = async (
    file: File
): Promise<RecognitionResponse> => {
    const shoeAnalysisApiResponse = await uploadAndAnalyze(file);
    const result = new RecognitionResult(shoeAnalysisApiResponse.analysis);
    const shoe = result.toDomain();

    return {
        message: shoeAnalysisApiResponse.message,
        imageUrl: shoeAnalysisApiResponse.imageUrl,
        shoe
    }
}