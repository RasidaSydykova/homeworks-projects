import React from 'react';

interface INumberProps extends React.PropsWithChildren {
    number: number;
}

const Number:React.FC<INumberProps> = props => {
    return (
        <div className="numbers">
            <div className="number">{props.number}</div>
        </div>
    );
};

export default Number;