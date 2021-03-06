# 🌌🚀🤖☄️🌑🌌 

# Ironhack Mars Rover Kata [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![Auto-build dist](https://github.com/AndresMWeber/ironhack-mars-rover-kata/workflows/Auto-build%20dist/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/ddf947f8-202e-4b57-a02b-c95fbc0cc416/deploy-status)](https://app.netlify.com/sites/mars-rover-kata/deploys)


## 📝 Table of Contents

- [About](#about)
- [How To Play](#howto)
- [Installing](#installing)
- [Running](#running)
- [Log Files](#log_files)
- [Authors](#authors)
- [Acknowledgments](#acknowledgements)
- [Built Using](#built_using)
- [License](#license)
- [Version History](#history)

## 🧐 About <a name = "about"></a>

A JS canvas-based Mars Rover Simulator written in JavaScript (Node.js).
| Deployments |
| :---------: |
| [Play Live on GHPages](https://andresmweber.github.io/ironhack-mars-rover-kata/) |
| [Play Live on Netlify](https://mars-rover-kata.netlify.app/) |

## 🕹️ How To Play  <a name = "howto"></a>
### Hotkeys:

<div align="center">
    <table>
        <tr width="100%">
          <td>
              <img src="media/demo_v3.gif" alt="Mars Rover Demo Gif" />
          </td>
          <td valign="top">
            <table >
                  <tr>
                      <td align="center" colspan="3"><h3>Control Scheme</h3></td>
                  </tr>
                  <tr>
                      <td></td>
                      <td><b>Web</b></td>
                  </tr>
                  <tr>
                      <td><b>Left</b></td>
                      <td>A</td>
                  </tr>
                  <tr>
                      <td><b>Right</b></td>
                      <td>D</td>
                  </tr>
                  <tr>
                      <td><b>Up</b></td>
                      <td>W</td>
                  </tr>
                  <tr>
                      <td><b>Down</b></td>
                      <td>S</td>
                  </tr>
                  <tr>
                      <td><b>Pause</b></td>
                      <td>Spacebar</td>
                  </tr>
                  <tr>
                      <td><b>Quit</b></td>
                      <td>Escape or CTRL + C</td>
                  </tr>
              </table>
          </td>
        </tr>
    </table>
</div>

## ⌨️ Installing <a name = "installing"></a>

### 🚀 Clone from repository and install dependencies

Just clone the repo and inside the main directory install it:

```bash
git clone https://github.com/andresmweber/ironhack-mars-rover-kata
cd ironhack-mars-rover-kata
npm install
```
### 🏃 Run <a name = "running"></a>

Now you can run it with either
```bash
node index.js
```
or
```bash
npm run-script play
```
Feel free to just hit `Enter` twice and run the game in default mode (you can read the defaults on the prompts).

## 📋 Log Files <a name = "log_files"></a>

After running the simulation it will always generate a log file you can look at to see the steps and travel log in more detail.  
The filename is in the format: ```roverLog_DD-MM-YYYY_HH-MM-SS.log``` and you will find it in the directory you ran the script from.
Here is an [example log file](media/sample_log_file.log) generated from the gif above.

Notice the travel map at the end which shows you the path they've taken.  Note that it will not show you if the rover has been over a spot multiple times, just shows the path with overlaps.

## 💳 Credits
### ✍️ Authors <a name = "authors"></a>
- [Andres Weber](https://www.github.com/andresmweber)

### 🎉 Acknowledgements <a name = "acknowledgements"></a>
- [Tania Rascia](https://github.com/taniarascia) I used her [Snek.js](https://github.com/taniarascia/snek/) game as a template for the v2 ui/terminal based blessed rendering.

### 👾 Sprites
- [Andres Weber](https://www.piskelapp.com/user/5716277421670400/public)

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJS](https://www.nodejs.org/) - Web Server
- [JavaScript](https://www.javascript.com/) - Front End
- [SCSS](https://sass-lang.com/) - Styling
- [Webpack](https://webpack.js.org/) - Asset Bundling
- [Piskel](https://www.piskelapp.com/) - Pixel Art Creation

## ⚖ License <a name = "license"></a>
This project is open source and available under the [MIT License](LICENSE).

## 📊 Version History <a name = "history"></a>

| Version | Description | Demo |
| :------ | :---------- | :--: |
| 1.0.0 | The first version was a simple simulation where all rovers were automated on a preset grid. | ![demo1.gif](media/demo_v1.gif) |
| 2.0.0 | The second version was a simple simulation where the player rover movements were based on user input and all npc rovers were automated on a user input size grid. | ![demo1.gif](media/demo_v2.gif) |
| 3.0.0 | The third version uses webpack to bundle assets and utilizes the canvas to draw custom sprites by employing the previously employed MVC architecture. | ![demo2.gif](media/demo_v3.gif) |
