import { useMutation } from "@tanstack/react-query";
import { recogniseShoe, type RecognitionResponse } from "../application/usecases/recogniseShoe";

/** 
* useRecogniseShoe
* Calls the application use-case and returns a React Query mutation 
*/
export const useRecogniseShoe = () => {
    return useMutation<RecognitionResponse, Error, File>({
        mutationFn: (file) => {
            return recogniseShoe(file);
        },
    })
}
    