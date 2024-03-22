import React, { useEffect, useRef, useState } from 'react';
import './Confetti.css';
import { Link } from "react-router-dom";

const PlayerAi1 = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 400;

        let ball = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: 10,
            velocityX: 5,
            velocityY: 5,
            speed: 7,
            color: "#fff"
        };

        let player = {
            x: 0, // links vom Canvas
            y: (canvas.height - 100) / 2, // -100 ist die Höhe des Schlägers
            width: 10,
            height: 100,
            score: 0,
            color: "#fff",
            moveUp: false,
            moveDown: false
        };

        let computer = {
            x: canvas.width - 10, // rechts vom Canvas
            y: (canvas.height - 100) / 2, // -100 ist die Höhe des Schlägers
            width: 10,
            height: 100,
            score: 0,
            color: "#fff"
        };

        const keyDownHandler = (event) => {
            switch(event.key) {
                case 'w': player.moveUp = true; break;
                case 's': player.moveDown = true; break;
            }
        };

        const keyUpHandler = (event) => {
            switch(event.key) {
                case 'w': player.moveUp = false; break;
                case 's': player.moveDown = false; break;
            }
        };

        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);

        /* const collision = (b, p) => {
            b.top = b.y - b.radius;
            b.bottom = b.y + b.radius;
            b.left = b.x - b.radius;
            b.right = b.x + b.radius;

            p.top = p.y;
            p.bottom = p.y + p.height;
            p.left = p.x;
            p.right = p.x + p.width;

            return b.right > p.left && b.top < p.bottom && b.left < p.right && b.bottom > p.top;
        }; */




        const drawRect = (x, y, w, h, color) => {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, h);
        };

        const drawArc = (x, y, r, color) => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill();
        };

        const resetBall = () => {
            ball.x = canvas.width / 2;
            ball.y = canvas.height / 2;
            ball.velocityX = -ball.velocityX;
            ball.speed = 7;
        };

        const update = () => {
            ball.x += ball.velocityX;
            ball.y += ball.velocityY;

            let computerLevel = 0.1;
            computer.y += (ball.y - (computer.y + computer.height / 2)) * computerLevel;
            
            if(ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
                ball.velocityY = -ball.velocityY;
            }

            let playerOrComputer = (ball.x < canvas.width / 2) ? player : computer;
            if(collision(ball, playerOrComputer)) {
                let collidePoint = (ball.y - (playerOrComputer.y + playerOrComputer.height / 2));
                collidePoint = collidePoint / (playerOrComputer.height / 2);
                
                let angleRad = (Math.PI / 4) * collidePoint;
                
                let direction = (ball.x < canvas.width / 2) ? 1 : -1;
                ball.velocityX = direction * ball.speed * Math.cos(angleRad);
                ball.velocityY = ball.speed * Math.sin(angleRad);
                
                ball.speed += 0.1;
            }

            if(ball.x - ball.radius < 0) {
                computer.score++;
                resetBall();
            } else if(ball.x + ball.radius > canvas.width) {
                player.score++;
                resetBall();
            }
        };

        const collision = (b, p) => {
            b.top = b.y - b.radius;
            b.bottom = b.y + b.radius;
            b.left = b.x - b.radius;
            b.right = b.x + b.radius;
            
            p.top = p.y;
            p.bottom = p.y + p.height;
            p.left = p.x;
            p.right = p.x + p.width;
            
            return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;
        };

        const render = () => {
            drawRect(0, 0, canvas.width, canvas.height, '#000');
            drawRect(player.x, player.y, player.width, player.height, player.color);
            drawRect(computer.x, computer.y, computer.width, computer.height, computer.color);
            drawArc(ball.x, ball.y, ball.radius, ball.color);
        };

        const game = () => {
            update();
            render();
        };

        const framePerSecond = 50;
        const interval = setInterval(game, 1000 / framePerSecond);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default PlayerAi1;
 
/*
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

const Pong = () => {
    const canvasRef = useRef(null);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8080');

        ws.current.onopen = () => {
            console.log('WebSocket connected');
        };

        ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            // Hier die Logik implementieren, um auf Nachrichten vom Server zu reagieren
            // Zum Beispiel Bewegungen des remote Spielers aktualisieren
        };

        return () => {
            ws.current.close();
        };
    }, []);

    // WebSocket-Nachricht senden Funktion
    const sendWSMessage = (message) => {
        if (ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(message));
        }
    };

    // Ihre vorhandene useEffect und andere Funktionen hier, mit Anpassungen für WebSocket
    // Zum Beispiel, sendWSMessage in den keyDownHandler und keyUpHandler einbauen

    return (
        // Ihr vorhandenes JSX
    );
};

export default Pong;
*/