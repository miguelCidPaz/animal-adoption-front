export default function useFindCurrentPet() {

    const findCurrentPet = (id, rawData) => {
        if (rawData.length > 0) {
            const currentPet = rawData.filter((pet) => pet.id === id);            
            return currentPet[0];
        }
    }
    return findCurrentPet;
}