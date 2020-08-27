function a(num) {
  const obj = {
    sum: function() {
      return this.inner_value.reduce((accu, curr) => {
        return curr + accu;
      }, 0);
    },
    multiply: function() {
      return this.inner_value.reduce((accu, curr) => {
        return curr * accu;
      }, 1);
    },
    a
  };

  if (this.inner_value === undefined) {
    obj.inner_value = [];
    obj.inner_value.push(num);
    return obj;
  } else {
    this.inner_value.push(num);
    return this;
  }
}

console.log(
  a(1)
    .a(2)
    .a(3)
    .sum()
);
console.log(
  a(1)
    .a(2)
    .sum()
);
console.log(
  a(1)
    .a(2)
    .a(3)
    .a(4)
    .multiply()
);
console.log(
  a(1)
    .a(2)
    .a(3)
    .multiply()
);
