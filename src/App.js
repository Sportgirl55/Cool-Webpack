import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {
  componentDidMount() {

    $('<h1 />')
      .text('Hello world from JQuery')
      .css({
        textAlign: 'center',
        color: 'red'
      })
      .appendTo($('header'))

  }
  render() {
    return (
      <React.Fragment>
        <header>

        </header>
        <main>
          <div className="box">
            <h1 className="box-title">
              Превед
        </h1>
            <p className="box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo saepe facilis necessitatibus voluptates
              reprehenderit non doloribus beatae. Odio ratione laudantium magni. Quo quis asperiores ea dignissimos harum
              molestiae repellendus?
        </p>
          </div>
        </main>
        <footer>

        </footer>
      </React.Fragment>

    )
  }
}