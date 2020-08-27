console.clear();

function subsets(nums: number[]): any {
  const answers: any[] = [[]];

  for (let i = 1; i <= nums.length; i++) {
    backtrack(i, answers, [nums], []);
  }

  return answers;
}

function backtrack(
  subsetLength: number,
  answers: any,

  potentialsMap: any,
  currPath: number[]
) {
  console.log("pMap", potentialsMap);
  console.log("currPath", currPath);
  console.log("answers", answers);
  console.log("-----");

  if (potentialsMap[0].length === 0) {
    return;
  }

  if (currPath.length === 0) {
    const chosen = potentialsMap[currPath.length][0];
    potentialsMap[currPath.length + 1] = potentialsMap[currPath.length].filter(
      (n: any) => n !== chosen
    );
    backtrack(subsetLength, answers, potentialsMap, [chosen]);
  } else if (currPath.length === subsetLength) {
    answers.push(currPath);
    const lastOfCurrPath = currPath[currPath.length - 1];
    const newCurrPath = [...currPath];
    newCurrPath.pop();
    potentialsMap[currPath.length - 1] = potentialsMap[
      currPath.length - 1
    ].filter((n: any) => n !== lastOfCurrPath);
    backtrack(subsetLength, answers, potentialsMap, newCurrPath);
  } else if (potentialsMap[currPath.length].length === 0) {
    const newCurrPath = [...currPath];
    newCurrPath.pop();

    potentialsMap[currPath.length - 1] = potentialsMap[
      currPath.length - 1
    ].filter((n: any) => n !== currPath[currPath.length - 1]);

    backtrack(subsetLength, answers, potentialsMap, newCurrPath);
  } else {
    const chosen = potentialsMap[currPath.length][0];
    if (currPath.length + 1 < subsetLength) {
      potentialsMap[currPath.length + 1] = potentialsMap[
        currPath.length
      ].filter((n: any) => n !== chosen);
    }
    backtrack(subsetLength, answers, potentialsMap, [...currPath, chosen]);
  }
}

console.log("ASW:", subsets([1, 2, 3]));
