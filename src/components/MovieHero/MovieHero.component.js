import React from "react";

const MovieHero = () => {
    return (
        <div>
            <div className="md:hidden">
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />
            </div>

            <div className="hidden md:block lg:hidden">
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />

            </div>

            <div className="relative hidden lg:block" style={{ height: "30rem" }}>
                <div className="grid grid-cols-3 gap-2">
                    <div className="absolute h-full w-full z-10"
                        style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
                    />

                    <div className="absolute z-30 w-64 h-96 left-64 top-10 col-span-2">
                        <img
                            src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                            alt="poster"
                            className="h-full w-full rounded-xl"
                        />
                    </div>
                    <div className="absolute z-40 top-10 right-72 ">
                        <h3 className="text-white font-bold text-2xl my-4 mt-4">Shang-Chi and the Legend of the Ten Rings</h3>
                        <p className="text-white font-bold text-xl my-4">💖 91% Ratings</p>
                        <div className="bg-gray-600 h-16 w-96 text-white">
                                <h4 className="text-bold text-xl">Add your rating and reviews</h4>
                                <p className="text-white-900 text-lg mt-2"> Your ratings matter</p>
                        </div>
                    </div>
                </div>
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                    className="w-full h-full"
                />
            </div>
        </div>
    )
};

export default MovieHero;