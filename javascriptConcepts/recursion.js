//prob one print descending order
function countRecursively(n) {
  if (n <= 0) {
    console.log("done");
    return;
  }
  console.log(n);
  countRecursively(n - 1);
}

//prob two sum of numbers

function sumRecursion(n, total = 0) {
  if (n < 0) {
    return total;
  }

  return sumRecursion(n - 1, total + n);
}

// print child of treeS

function printChildrenRecursively(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursively(child);
  });
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        {
          name: "Kyle",
          children: [],
        },
        {
          name: "Sophia",
          children: [],
        },
      ],
    },
  ],
};
