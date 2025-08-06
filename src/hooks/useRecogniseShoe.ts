import { useMutation } from "@tanstack/react-query";
import { recogniseShoe } from "../application/usecases/recogniseShoe";
import type { Shoe } from "../domain/entities/Shoe";

/** 
* useRecogniseShoe
* Calls the application use-case and returns a React Query mutation 
*/
export const useRecogniseShoe = () => {
    return useMutation<Shoe, Error, File>({
        mutationFn: (file) => {
            return recogniseShoe(file);
        },
    })
}
    