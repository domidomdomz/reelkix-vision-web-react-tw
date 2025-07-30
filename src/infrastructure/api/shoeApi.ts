import axios from 'axios'
import type { ShoeAnalysisApiResponse } from '../../application/dtos/ShoeAnalysisApiResponseDTO'
import { API_BASE_URL } from '../../infrastructure/config/env'


const client = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'multipart/form-data' }
});


export const uploadAndAnalyze = async (file: File): Promise<ShoeAnalysisApiResponse> => {
    const formData = new FormData();
    formData.append('file', file);

    const { data } = await client.post("image/upload", formData);
    return data;
}