<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  A

In this code, `greeting` is declared but unassigned on the other hand `greetign` is assigned with an empty object but undecalred. if print `greetign` it show empty object `{}` to the console but there is change that it throw an error because `greetign` is undecalred.
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

If we console log this code , the output of the `sum(1, "2")` function is `"12"` because the first argument is a number `(1)`, while the second argument is a string `("2")`.For this reason JavaScript will convert the number 1 to a string and then concatenate it with the string "2", resulting in the string `"12"`. But in this code only call the function `sum(1, "2")` , the function is not console log .So in code editor this code does not show any result.

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

In this code ,output is `['🍕', '🍫', '🥑', '🍔']`.Here `food` is an array containing four food emoji strings and `info` is object  with a property favoriteFood . As `favoriteFood` initially set food[0] that's mean `favoriteFood` = ["🍕"].But later `favoriteFood` update with the string `"🍝"` but it doesn't modify the original `food` array.So when print the `food` array , it will still contain the original elements.

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B
in this code, `sayHi` function expects one argument `name`, to be passed when it's called.But in `console.log(sayHi())` , didn't provide any argument to the sayHi function.So JavaScript will assign undefined to the parameter.For this reason `name` parameter inside the `sayHi` function will be undefined &  the function will return the string `"Hi there, undefined"`.


</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C
To use ForEach loop,  `nums` array each element is check whether `num` is truthy if truthy then increment `count` value by 1. For first iteration , `num` =0, which is not truthy , so this time `count` is not increment. Next iteration , `num` = 1 which is truth ,so this time `count` value is increment by it's previous `+` 1 which is `0+1=1`. Similarly when `num` is `2`,`3` , `count`  variable is incremented by `1` for each of them.After complete the loop, the final value of `count` is `3`.

</p>
</details>
