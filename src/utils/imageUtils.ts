const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export const getFullImageUrl = (posterPath: string): string => {
    return posterPath ? `${IMAGE_BASE_URL}${posterPath}` : '';
};