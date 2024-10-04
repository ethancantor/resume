
/**
 * Returns a random number between 0 and 1, using the provided seed. The
 * algorithm is a linear congruential generator, which is fast and simple.
 * The resulting numbers are not cryptographically secure, but are suitable
 * for most purposes.
 *
 * @param {number} seed The seed to use when generating the random number.
 * @return {number} A random number between 0 and 1.
 */
export const useSeededRandom = (seed: number): number => {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return Math.abs((s = (s * a) % m) / m);
}
