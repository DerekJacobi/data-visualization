import React from "react";

interface BubbleSortProps { title: string };

export const BubbleSort = (props: BubbleSortProps) => {
  let arrayHistory: number[][] = [];

  const array = [3, 6, 1, 8, 2, 10, 123, 55, 4, 90];

  const swap = (x: number, y: number, arr: Array<number>) => {
    [arr[x], arr[y]] = [arr[y], arr[x]];
    const arrCopy = [...arr];
    arrayHistory.push(arrCopy);
    return arr;
  }

  const bubbleSort = (arr: Array<number>) => {
    let isSorted = false;
    let counter = 0;
    while(!isSorted) {
      isSorted = true;
      for(let x = 0; x < (arr.length -1 - counter); x++) {
        if (arr[x] > arr[x + 1]) {
          isSorted = false;
          swap(x, x + 1, arr);
        }
      }
      counter ++;
    }
    return arr;
  }

  bubbleSort(array)
  
  return (
    <div>
     <h1>Sort Type: {props.title}</h1>
     {array}
    </div>
  );
};