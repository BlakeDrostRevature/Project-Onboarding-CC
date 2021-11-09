function trackRobot() {
  let ans = [0, 0];
  for (let i = 0; i < arguments.length; i++) {
    if (i % 4 == 0) {
      ans[1] += arguments[i];
    }
    else if (i % 4 == 1) {
      ans[0] += arguments[i];
    }
    else if (i % 4 == 2) {
      ans[1] -= arguments[i];
    }
    else if (i % 4 == 3) {
      ans[0] -= arguments[i];
    }
  }
  return ans;
}

console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot());
console.log(trackRobot(-10, 20, 10));