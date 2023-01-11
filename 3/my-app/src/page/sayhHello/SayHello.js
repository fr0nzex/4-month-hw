import React from 'react';

function SayHello() {

    const sayHello = () => {
        alert("Home Work готов!!!")
    }

    return (
        <>
            <button onClick={sayHello}>Нажми на меня</button>
        </>
    );
}

export default SayHello;