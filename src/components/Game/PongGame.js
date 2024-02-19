import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const PongGame = () => {
  const { t } = useTranslation();

  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [leftPaddleY, setLeftPaddleY] = useState(250);
  const [rightPaddleY, setRightPaddleY] = useState(250);
  const [ballX, setBallX] = useState(400);
  const [ballY, setBallY] = useState(300);
  const [ballSpeedX, setBallSpeedX] = useState(5);
  const [ballSpeedY, setBallSpeedY] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);
  }, []);

  useEffect(() => {
    if (context) {
      draw();
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [context]);

  useEffect(() => {
    const animate = () => {
      update();
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  const draw = () => {
    if (context) {
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );

      // Draw paddles
      context.fillStyle = "#fff";
      context.fillRect(50, leftPaddleY, 20, 100); // Left paddle
      context.fillRect(canvasRef.current.width - 70, rightPaddleY, 20, 100); // Right paddle

      // Draw ball
      context.beginPath();
      context.arc(ballX, ballY, 10, 0, Math.PI * 2);
      context.fillStyle = "#fff";
      context.fill();
      context.closePath();
    }
  };

  const update = () => {
    if (canvasRef.current) {
      setBallX(ballX + ballSpeedX);
      setBallY(ballY + ballSpeedY);

      // Check collision with top and bottom walls
      if (
        ballY + ballSpeedY > canvasRef.current.height - 10 ||
        ballY + ballSpeedY < 10
      ) {
        setBallSpeedY(-ballSpeedY);
      }

      // Check collision with paddles
      if (
        (ballX + ballSpeedX < 70 &&
          ballY + ballSpeedY > leftPaddleY &&
          ballY + ballSpeedY < leftPaddleY + 100) ||
        (ballX + ballSpeedX > canvasRef.current.width - 90 &&
          ballY + ballSpeedY > rightPaddleY &&
          ballY + ballSpeedY < rightPaddleY + 100)
      ) {
        setBallSpeedX(-ballSpeedX);
      }

      // Check if ball goes out of bounds
      if (
        ballX + ballSpeedX > canvasRef.current.width - 10 ||
        ballX + ballSpeedX < 10
      ) {
        // Reset ball position
        setBallX(canvasRef.current.width / 2);
        setBallY(canvasRef.current.height / 2);
      }
    }
  };

  const handleKeyDown = (event) => {
    switch (event.code) {
      case "ArrowUp":
        setLeftPaddleY(Math.max(leftPaddleY - 20, 0));
        break;
      case "ArrowDown":
        setLeftPaddleY(
          Math.min(leftPaddleY + 20, canvasRef.current.height - 100),
        );
        break;
      case "KeyW":
        setRightPaddleY(Math.max(rightPaddleY - 20, 0));
        break;
      case "KeyS":
        setRightPaddleY(
          Math.min(rightPaddleY + 20, canvasRef.current.height - 100),
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>{t("game.title")}</h2>
      <canvas ref={canvasRef} width={800} height={600} />
    </div>
  );
};

export default PongGame;
