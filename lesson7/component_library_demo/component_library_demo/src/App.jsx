import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button as MuiButton, TextField, MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
import { Button as AntdButton, Input, Dropdown } from 'antd'

function App() {
  const antdMenuItems = [
    {
      key: 'sgd',
      label: "SGD"
    },
    {
      key: 'usd',
      label: "USD"
    },
    {
      key: 'jpy',
      label: "JPY"
    }
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Demo for using component libraries</h2>
      <div>
        <p>Check out how the normal HTML compares against the pre-made components</p>
        <h1>Button</h1>
        <div class="comparison-table">
          <div class="component-content">
            <h2>Material UI</h2>
            <MuiButton variant="contained">Click Me</MuiButton>
          </div>
          <div class="component-content">
            <h2>normal HTML</h2>
            <button>Click Me</button>
          </div>
          <div class="component-content">
            <h2>Ant Design</h2>
            <AntdButton>Click Me</AntdButton>
          </div>
        </div>
        <h1>Text Input</h1>
        <div class="comparison-table">
          <div class="component-content">
            <h2>Material UI</h2>
            <TextField 
              id="outlined-basic"
              variant="outlined"
              placeholder="Name" 
            />
          </div>
          <div class="component-content">
            <h2>normal HTML</h2>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div class="component-content">
            <h2>Ant Design</h2>
            <Input
              placeholder="Name"
            />
          </div>
        </div>
        <h1>Dropdown Menu</h1>
        <div class="comparison-table">
          <div class="component-content">
            <h2>Material UI</h2>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"sgd"}
              label="Age"
              onChange={() => { console.log('handleChange handler')}}
            >
              <MenuItem value={"sgd"}>SGD</MenuItem>
              <MenuItem value={"usd"}>USD</MenuItem>
              <MenuItem value={"jpy"}>JPY</MenuItem>
            </Select>
          </div>
          <div class="component-content">
            <h2>normal HTML</h2>
            <select name="currency" id="currency">
              <option value="sgd">SGD</option>
              <option value="usd">USD</option>
              <option value="jpy">JPY</option>
            </select>
          </div>
          <div class="component-content">
            <h2>Ant Design</h2>
            <Dropdown menu={{
              items: antdMenuItems,
              selectable: true,
              defaultSelectedKeys: "sgd"
            }}>
              <AntdButton>Try this</AntdButton>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
