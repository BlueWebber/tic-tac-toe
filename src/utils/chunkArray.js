export default function chunkArray(array, chunk_size) {
  const numsPerGroup = Math.ceil(array.length / chunk_size);
  return new Array(3)
    .fill("")
    .map((_, i) => array.slice(i * numsPerGroup, (i + 1) * numsPerGroup));
}
