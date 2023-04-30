/* 
  You have a long flowerbed in which some of the plots are planted, 
  and some are not. However, flowers cannot be planted in adjacent plots.

  Given an integer array flowerbed containing 0's and 1's, 
  where 0 means empty and 1 means not empty, and an integer n, 
  return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let flowerbedC = [...flowerbed];
  let counter = 0;

  for (let i = 0; i < flowerbedC.length; i++) {
    if (
      (flowerbedC[i - 1] === 0 &&
        flowerbedC[i] === 0 &&
        flowerbedC[i + 1] === 0) ||
      (i === 0 && flowerbedC[i] === 0 && flowerbedC[i + 1] === 0) ||
      (i + 1 === flowerbedC.length &&
        flowerbedC[i] === 0 &&
        flowerbedC[i - 1] === 0) ||
      (flowerbedC[i] === 0 && flowerbedC.length === 1)
    ) {
      flowerbedC[i] = 1;
      counter++;
    }
  }

  return counter >= n;
}
