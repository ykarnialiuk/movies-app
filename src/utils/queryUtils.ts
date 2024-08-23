const createMovieSearchQuery = (title?: string, releaseYear?: string): string => {
    const params: Record<string, string> = {};

    if (title) {
        params.query = title;
    }

    if (releaseYear) {
        params.primary_release_year = releaseYear;
    }

    const queryString = new URLSearchParams(params).toString();

    return queryString;
};

export default createMovieSearchQuery;