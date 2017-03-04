import React from 'react';

class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = { selected_index: 0};

  }



  click(index, event){
    event.preventDefault();
    this.setState({selected_index: index});
  }

  render() {
    const titles = this.props.tabData.map( (obj,index) => (
      <h1 key={index} onClick={this.click.bind(this, index)}>{obj.title}</h1>)
      );

    const idx = this.state.selected_index;

    let content = undefined;

    this.props.tabData.forEach( (obj, index) => {
      if (index === idx){
        content = obj.body;
      }
    });

    return (

      <div>
        <header>
          <ul>
            {titles}
          </ul>
        </header>
          <article>
          {content}
        </article>
      </div>
    );
  }

}

export default Tabs;
