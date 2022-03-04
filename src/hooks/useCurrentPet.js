export default function useFindCurrentPet(id, rawData) {
    currentPet = rawData.filter((pet) => pet.id === id);
    return currentPet;
}