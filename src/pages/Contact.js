import React, { Component } from 'react';

class Index extends Component {
  state = {
    
  };
  render() {
    return (
      <div>
        <h2>Contact</h2>
				<p>You can reach me at:</p>
        <table><tbody>
          <tr>
            <td>Discord</td>
            <td>xethlyx#8616</td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td><a href="https://instagram.com/xethlyx/">@xethlyx</a></td>
          </tr>
          <tr>
            <td>Github</td>
            <td><a href="https://github.com/xethlyx/">xethlyx</a></td>
          </tr>
        </tbody></table>
        <p>I reply the quickest via Discord and Email- if you need me use those first. I almost never check Instagram, nor do I get push notifications so any form of contact there is a lost cause.</p>
      </div>
    )
  }
}

export default Index;