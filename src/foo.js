export const foo = "hello world";

export default function log(message) {
  console.log(message);
  document.querySelector("#app").append(message);
}
