import type { ShoeAnalysis } from "./ShoeAnalysisDTO";

export interface ShoeAnalysisApiResponse {
    message: string;
    imageUrl: string;
    analysis: ShoeAnalysis;
}