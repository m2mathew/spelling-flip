// External dependencies
import React from 'react';


class Pie extends React.Component {

	render() {
		const {
			color,
			width,
			progress
		} = this.props;

		const pi = 3.14159265359;
		const r = (400 / 2);
		const c = (2 * pi) * r;
		const realProgress = c * progress;

		return (
			<div className='svg-container'>
        <div className='svg-content'>
          <svg
            viewBox='0 0 500 500'
            preserveAspectRatio='xMinYMin meet'
          >
        		<filter id='shadow'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='15' />
        			<feOffset dx='-5' dy='-4' />
            </filter>

            <circle
              className='animated'
              cx='250'
              cy='250'
              r='200'
              stroke={''}
              fillOpacity='0'
              strokeWidth={width + 10}
              strokeDasharray={[realProgress, c]}
              strokeDashoffset={c * progress}
            />
						<circle
							filter='url(#shadow)'
						  className='animated shadow'
              cx='250'
              cy='250'
              r='200'
              stroke={color}
              fillOpacity='0'
              strokeWidth={width}
              strokeDasharray={[realProgress, c]}
              strokeDashoffset={c * progress}
            />
            <circle
						  className='animated fill'
              cx='250'
              cy='250'
              r='200'
              stroke={color}
              fillOpacity='0'
              strokeWidth={width}
              strokeDasharray={[realProgress, c]}
              strokeDashoffset={c * progress}
            />
            <circle
              cx='250'
              cy='250'
              r='200'
              stroke={color}
              fillOpacity='0'
              strokeWidth='5'
              strokeDasharray={[c, c]}
              strokeOpacity='0.1'
            />
          </svg>
        </div>
      </div>
		);
	}
}

export default Pie;
