import { Shoe } from "../../domain/entities/Shoe";
import { uploadAndAnalyze } from "../../infrastructure/api/shoeApi";
import { RecognitionResult } from "../../domain/services/RecognitionResult";

export const recogniseShoe = async (
    file: File
): Promise<Shoe> => {
    const { analysis } = await uploadAndAnalyze(file);
    const result = new RecognitionResult(analysis);
    return result.toDomain();
}