# react-nintendo-switch-procon-renderer
This npm package is a react component that displays the nintendo switch pro controller on the screen and changes the color of each button with an argument.  
  
[demo](https://codesandbox.io/s/eact-gamepad-procon-sample-49cdb1)

## Usage
* callback
  * on a click butotn
    * handleButtonClick(button: Button)
* The available inputs are "a", "b", "x", "y", "up", "right", "down", "left", "r", "l", "zr", "zl", "plus", "minus", "home", "cap".

```javascript
import { Procon, buttons } from "react-nintendo-switch-procon-renderer";

export default function App() {
  const handleButtonClick = (button: Button) => {
    console.log(button);
  }

  return (
    <>
      <Procon pressedButtons={[]} handleButtonClick={handleButtonClick} />
      <hr />
      <Procon pressedButtons={["zr", "up"]} />
      <hr />
      <Procon pressedButtons={buttons} />
    </div>
    </>
  )
}
```

## Development
* yarn
* yarn build
* cd sample && yarn server

## Hot to release
* yarn release-build
* npm publish

## TODO
* left stick, right stickの押し込み反映
* スティックの傾きの反映
* do npm publish by github action
