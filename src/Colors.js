import React from 'react';

const ColorList = [
  {
    label: 'Pink',
    hexCode: '#E91E63'
  },
  {
    label: 'Green',
    hexCode: '#4CAF50'
  },
  {
    label: 'Lime',
    hexCode: '#CDDC39'
  },
  {
    label: 'Indigo',
    hexCode: '#3F51B5'
  },
  {
    label: 'Cyan',
    hexCode: '#00BCD4'
  },
  {
    label: 'Blue',
    hexCode: '#2196F3'
  }
]
export class Colors extends React.Component {
  render() {
    return (<div className={"buttonContainer"}>
      {
        ColorList.map((color) => {
          return (
            <button
              style={{ backgroundColor: color.hexCode }}

              onClick={() => this.props.onClick(color)}
            >
              {color.label}
            </button>
          )
        })
      }
    </div>)
  }
}
