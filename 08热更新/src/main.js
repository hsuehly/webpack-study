import "./style/index.css"
import "./style/app.less"
import "./style/index.scss"

const fn = () => {
  console.log("es6语法")
}

fn()
let arr = ["1","2",["3","4",[5,6,7,[[3,[4[5]]]]]]]
console.log(arr.flat(20));


console.log("ssss")