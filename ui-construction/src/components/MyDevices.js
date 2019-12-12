import React, { Component } from 'react'

export default class MyDevices extends Component {
    render() {
        return (
            <div>
                <img src="/device_chart.PNG" alt="Device chart"></img>
                <table className="device-table">
                    <thead>
                        <tr>
                            <th>Device</th>
                            <th>Solar Panel</th>
                            <th>Health</th>
                            <th>Battery</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>Panasonic SC325</td>
                            <td>97%</td>
                            <td><div className="battery-bubble green"></div></td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>SunPower SPR-X21-335-BLK-D-AC</td>
                            <td>100%</td>
                            <td><div className="battery-bubble yellow"></div></td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td>LG Solar LG320E1K-A5</td>
                            <td>60%</td>
                            <td><div className="battery-bubble orange"></div></td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Jinko Solar JKM295M-60B</td>
                            <td>12%</td>
                            <td><div className="battery-bubble lightgreen"></div></td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td>Canadian Solar CS6K-300MS</td>
                            <td>99%</td>
                            <td><div className="battery-bubble red"></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
