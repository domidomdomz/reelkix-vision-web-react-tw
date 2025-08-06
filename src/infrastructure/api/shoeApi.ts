import axios from 'axios'
import type { ShoeAnalysisApiResponse } from '../../application/dtos/ShoeAnalysisApiResponseDTO'
import { API_BASE_URL } from '../../infrastructure/config/env'


const client = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'multipart/form-data' }
});


export const uploadAndAnalyze = async (file: File): Promise<ShoeAnalysisApiResponse> => {
    try {
        const formData = new FormData();
        formData.append('file', file);
    
        const { data } = await client.post("image/upload", formData);
        return data;
    } catch (error) {
        console.error("Error uploading and analyzing file:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

export const getShoeAnalysis = async (id: string): Promise<ShoeAnalysisApiResponse> => {

    try {
        const { data } = await client.get(`analysis/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching shoe analysis for ID ${id}:`, error);
        throw error;
    }
}
