export default function useHandleCurrentPet() {

    const getCurrentPetData = (petId, allPets) => {
        if (allPets.length > 0) {
            const petData = allPets.filter((pet) => pet.id === petId);
            return petData[0];
        }
    }

    const getAdoptionStatus = (petId, activeAdoptions) => {
        if (activeAdoptions.length > 0) {
            const petAdoptionStatus = activeAdoptions.filter((adoption) => adoption.idPet === petId);
            return petAdoptionStatus[0];
        }
    }

    return {getCurrentPetData, getAdoptionStatus};
}